"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "@/app/_components/Button/Button";
import { REFLY_COMMENT_LENGTH } from "@/app/_constants/MaxTextLength";
import { commentApi } from "@/app/_apis/comment";

interface CommentInputProps {
  ratingId: number;
}

function CommentInput({ ratingId }: CommentInputProps) {
  const queryClient = useQueryClient();
  const [textValue, setTextValue] = useState("");

  const mutation = useMutation({
    mutationFn: (comment: string) => {
      return commentApi.postReflyComment(ratingId, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", "reflyList", "reflyCommentList"],
      });
      setTextValue("");
    },
  });

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

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
        value={textValue}
        onChange={onChange}
      />
      <div className="flex flex-col justify-between">
        <p className="text-end text-sm text-gray-500">
          {textValue.length}/{REFLY_COMMENT_LENGTH}
        </p>
        <Button bgColor="yellow" buttonSize="small" type="submit">
          등록
        </Button>
      </div>
    </form>
  );
}

export default CommentInput;
