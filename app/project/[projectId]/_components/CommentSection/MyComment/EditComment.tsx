"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MyCommentResponse } from "@/app/_apis/schema/commentResponse";
import { commentApi } from "@/app/_apis/comment";
import { useToast } from "@/app/_context/ToastContext";
import ToolTip from "../../Comment/ToolTip";
import EnterRating from "../../Comment/EnterRating";
import EnterCommentProvider, { useEnterCommentContext } from "../../../_context/EnterCommentProvider";
import EnterText from "../../Comment/EnterText";
import EnterButton from "../../Comment/EnterButton";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";

interface Props {
  projectId: number;
  myComment: MyCommentResponse;
}

function EditComment({ projectId, myComment }: Props) {
  const { setView } = useMyCommentContext();
  const { rating, comment } = useEnterCommentContext();
  const { addToast } = useToast();

  const getRatingData = [
    myComment.projectRating.ideaRank,
    myComment.projectRating.designRank,
    myComment.projectRating.functionRank,
    myComment.projectRating.completionRank,
  ];

  const editCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const queryClient = useQueryClient();

  const { comment: getCommentData, ratingId } = myComment.projectRating;

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.putComment(ratingId, { ...editCommentData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", "detail", "commentData", ratingId],
      });
      addToast("프로젝트 리뷰가 수정되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 수정이 실패했습니다.", "error");
    },
  });

  if (!myComment.projectRating) return null;

  const editComment = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    mutation.mutate();
    setView("show");
  };

  return (
    <div className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      <div className="mb-8 flex items-center gap-1">
        <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
        <ToolTip />
      </div>
      <div className="flex flex-col gap-6">
        <EnterCommentProvider>
          <EnterRating ratingValue={getRatingData} />
          <EnterText commentValue={getCommentData} />
          <EnterButton
            projectId={projectId}
            mode="edit"
            showComment={() => setView("show")}
            editComment={() => editComment}
          />
        </EnterCommentProvider>
      </div>
    </div>
  );
}

export default EditComment;
