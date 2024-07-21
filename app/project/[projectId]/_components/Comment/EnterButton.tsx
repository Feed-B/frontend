"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/comment";
import Button from "@/app/_components/Button/Button";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { useEnterCommentContext } from "../../_context/EnterCommentProvider";

interface Props {
  projectId: number;
  mode?: "write" | "edit";
  onClick: () => void;
}

function EnterButton({ projectId, mode = "write", onClick }: Props) {
  const { rating, comment } = useEnterCommentContext();
  const queryClient = useQueryClient();

  const isDisabled = rating.some(element => element < 1);

  const postCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const commentListQuery = commentQueryKeys.list({ projectId, page: 1 });

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.postComment(projectId, { ...postCommentData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentListQuery.queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!isDisabled) {
      mutation.mutate();
    }
  };

  return (
    <div className="flex">
      {mode === "write" ? (
        <Button
          className="ml-auto"
          buttonSize="normal"
          bgColor={isDisabled ? "gray" : "yellow"}
          onClick={handleSubmit}
          disabled={isDisabled}>
          등록
        </Button>
      ) : (
        <>
          <Button className="ml-auto" buttonSize="normal" bgColor="gray" onClick={onClick}>
            취소
          </Button>
          <Button className="ml-2" buttonSize="normal" bgColor="yellow" onClick={onClick}>
            수정
          </Button>
        </>
      )}
    </div>
  );
}

export default EnterButton;
