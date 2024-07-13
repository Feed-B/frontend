"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi } from "@/app/_apis/comment";
import Button from "@/app/_components/Button/Button";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";

interface Props {
  ratingId: number;
  onClick: () => void;
}

function CommentEditButton({ ratingId, onClick }: Props) {
  const { rating, comment } = useEnterCommentContext();
  const queryClient = useQueryClient();

  const editCommentData = {
    projectRatingId: ratingId,
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
        queryKey: ["comment", "commentData", ratingId],
      });
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
