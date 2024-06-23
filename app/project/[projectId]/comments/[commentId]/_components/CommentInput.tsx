"use client";

import React, { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "@/app/_components/Button/Button";
import { REFLY_COMMENT_LENGTH } from "@/app/_constants/MaxTextLength";
import { commentApi } from "@/app/_apis/comment";
import getQueryClient from "@/app/_queryFactory/getQueryClient";

interface CommentInputProps {
  projectId: number;
  commentId: number;
}

function CommentInput({ projectId, commentId }: CommentInputProps) {
  const queryClient = getQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: string) => {
      return commentApi.PostReflyComment(projectId, commentId, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", "reflyList", "reflyCommentList"],
      });
    },
  });

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const comment = formData.get("comment");
    if (comment) {
      mutation.mutate(comment.toString());
    }
  };

  return (
    <form onSubmit={handelSubmit} className="flex min-h-32 gap-1 rounded-lg border border-solid border-gray-200 p-3">
      <textarea
        name="comment"
        className="w-full resize-none bg-transparent outline-none"
        placeholder="댓글을 입력해주세요"
        maxLength={REFLY_COMMENT_LENGTH}
      />
      <div className="flex flex-col justify-between">
        <p className="text-end text-sm text-gray-500">0/{REFLY_COMMENT_LENGTH}</p>
        <Button bgColor="mainBlue" buttonSize="small" type="submit">
          등록
        </Button>
      </div>
    </form>
  );
}

export default CommentInput;
