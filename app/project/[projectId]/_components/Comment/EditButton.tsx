"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/comment";
import Button from "@/app/_components/Button/Button";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { useToast } from "@/app/_context/ToastContext";
import { useEnterCommentContext } from "../../_context/EnterCommentProvider";

interface Props {
  projectId: number;
  ratingId: number;
  mode?: "write" | "edit";
  showComment: () => void;
}

function WriteButton({ projectId, ratingId, showComment }: Props) {
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

  const commentQuery = commentQueryKeys.myComment(projectId);

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.putComment(ratingId, { ...putCommentData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentQuery.queryKey,
      });
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
    <div className="flex">
      <Button className="ml-auto" buttonSize="normal" bgColor="gray" onClick={showComment}>
        취소
      </Button>
      <Button className="ml-2" buttonSize="normal" bgColor="yellow" onClick={editComment}>
        수정
      </Button>
    </div>
  );
}

export default WriteButton;
