"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/commentApi";
import Button from "@/app/_components/Button/Button";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { useToast } from "@/app/_context/ToastContext";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";

interface Props {
  projectId: number;
  mode?: "write" | "edit";
  showComment: () => void;
}

function WriteButton({ projectId, showComment }: Props) {
  const { rating, comment } = useEnterCommentContext();
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const isDisabled = rating.some(element => element < 1);

  const postCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const commentQuery = commentQueryKeys.myComment(projectId);
  const commentListQuery = commentQueryKeys.list({ projectId, page: 1 });

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.postComment(projectId, { ...postCommentData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.averageRating(projectId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQuery.queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentListQuery.queryKey,
      });
      addToast("프로젝트 리뷰가 작성되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 작성이 실패했습니다.", "error");
    },
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!isDisabled) {
      mutation.mutate();
      showComment();
    }
  };

  return (
    <div className="flex">
      <Button className="ml-auto" buttonSize="normal" bgColor="yellow" onClick={handleSubmit} disabled={isDisabled}>
        등록
      </Button>
    </div>
  );
}

export default WriteButton;
