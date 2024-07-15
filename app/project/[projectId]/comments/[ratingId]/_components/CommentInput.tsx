"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "@/app/_components/Button/Button";
import { REFLY_COMMENT_LENGTH } from "@/app/_constants/MaxTextLength";
import { commentApi } from "@/app/_apis/comment";

interface CommentInputProps {
  ratingId?: number;
  commentId?: number;
  type: "post" | "put";
  toggleState?: () => void;
  commentValue?: string;
}

function CommentInput({ ratingId, commentId, type, toggleState, commentValue }: CommentInputProps) {
  const queryClient = useQueryClient();
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    if (commentValue) {
      setTextValue(commentValue);
    }
  }, [commentValue]);

  const postReflyCommentmutation = useMutation({
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

  const putReflyCommentmutation = useMutation({
    mutationFn: (comment: string) => {
      return commentApi.putReflyComment(commentId, comment);
    },
    onSuccess: () => {
      console.log("test");
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
    if (type === "post") {
      postReflyCommentmutation.mutate(textValue);
    } else if (type === "put" && toggleState) {
      putReflyCommentmutation.mutate(textValue);
      toggleState();
    }
  };

  const handelToggle = () => {
    if (toggleState) {
      toggleState();
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
        <div className="flex gap-3">
          {type === "put" && (
            <Button bgColor="gray" buttonSize="small" type="button" onClick={handelToggle}>
              취소
            </Button>
          )}
          <Button bgColor="yellow" buttonSize="small" type="submit">
            {type === "post" ? "등록" : "수정"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default CommentInput;
