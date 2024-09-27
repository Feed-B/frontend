"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/commentApi";
import Button from "@/app/_components/Button/Button";
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKey } from "@/app/_queryFactory/commentQuery";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";

interface Props {
  ratingId: number;
  onClick: () => void;
  projectId: number;
}

function CommentEditButton({ ratingId, onClick, projectId }: Props) {
  const { rating, comment } = useEnterCommentContext();
  const { addToast } = useToast();

  const { windowWidth } = useBrowserSize();

  const queryClient = useQueryClient();

  const editCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.putComment(ratingId, { ...editCommentData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.detail(ratingId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.myComment(projectId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.list().queryKey,
      });
      addToast("프로젝트 리뷰가 수정되었습니다", "success");
      revalidateTagAction("commentDetail");
      revalidateTagAction("commentList");
      revalidateTagAction("myComment");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("리뷰 수정 오류가 발생했습니다.", "error");
    },
  });

  const editComment = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    mutation.mutate();
    onClick();
  };

  return (
    <div className="flex">
      <>
        <Button
          className="ml-auto"
          buttonSize={windowWidth < 480 ? "small" : "normal"}
          bgColor="gray"
          onClick={onClick}>
          취소
        </Button>
        <Button
          className="ml-2"
          buttonSize={windowWidth < 480 ? "small" : "normal"}
          bgColor="yellow"
          onClick={editComment}>
          수정
        </Button>
      </>
    </div>
  );
}

export default CommentEditButton;
