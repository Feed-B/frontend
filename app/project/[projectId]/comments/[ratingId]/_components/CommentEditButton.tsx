"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/comment";
import Button from "@/app/_components/Button/Button";
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";

interface Props {
  ratingId: number;
  onClick: () => void;
}

function CommentEditButton({ ratingId, onClick }: Props) {
  const { rating, comment } = useEnterCommentContext();
  const { addToast } = useToast();

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
        queryKey: commentQueryKeys.detail(ratingId).queryKey,
      });
      addToast("프로젝트 리뷰가 수정되었습니다", "success");
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
        <Button className="ml-auto" buttonSize="normal" bgColor="gray" onClick={onClick}>
          취소
        </Button>
        <Button className="ml-2" buttonSize="normal" bgColor="yellow" onClick={editComment}>
          수정
        </Button>
      </>
    </div>
  );
}

export default CommentEditButton;
