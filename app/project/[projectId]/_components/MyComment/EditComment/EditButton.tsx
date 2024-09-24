"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/comment";
import Button from "@/app/_components/Button/Button";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { useToast } from "@/app/_context/ToastContext";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";
import { useCurrentPageContext } from "../../../_context/CurrentPageProvider";

interface Props {
  projectId: number;
  ratingId: number;
  mode?: "write" | "edit";
  showComment: () => void;
}

function EditButton({ projectId, ratingId, showComment }: Props) {
  const { currentPage, setCurrentPage } = useCurrentPageContext();
  const { rating, comment } = useEnterCommentContext();
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const putCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const projectRatingQuery = projectQueryKeys.totalRating(projectId);
  const commentQuery = commentQueryKeys.myComment(projectId);
  const commentListQuery = commentQueryKeys.list({ projectId, page: currentPage });

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.putComment(ratingId, { ...putCommentData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectRatingQuery.queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQuery.queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentListQuery.queryKey,
      });
      setCurrentPage(1);
      addToast("프로젝트 리뷰가 수정되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 수정이 실패했습니다.", "error");
    },
  });

  const editComment = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    mutation.mutate();
    showComment();
  };

  return (
    <div className="ml-auto flex gap-2">
      <Button
        className="border border-gray-200 hover:bg-gray-200"
        buttonSize="normal"
        bgColor="gray"
        onClick={showComment}>
        취소
      </Button>
      <Button buttonSize="normal" bgColor="yellow" onClick={editComment}>
        수정
      </Button>
    </div>
  );
}

export default EditButton;
