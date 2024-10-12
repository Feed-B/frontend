"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "@/app/_components/Button/Button";
import { REFLY_COMMENT_LENGTH } from "@/app/_constants/MaxTextLength";
import useCommentMutation from "@/app/_hooks/mutations/useCommentMutation";

interface CommentInputProps {
  projectId?: number;
  ratingId?: number;
  commentId?: number;
  type: "post" | "put";
  toggleState?: () => void;
  commentValue?: string;
}

function CommentInput({ ratingId, commentId, type, toggleState, commentValue }: CommentInputProps) {
  const [textValue, setTextValue] = useState("");
  const { postReflyCommentMutation } = useCommentMutation({ id: commentId, ratingId, setTextValue });
  const { putReflyCommentMutation } = useCommentMutation({ id: commentId, setTextValue });

  useEffect(() => {
    if (commentValue) {
      setTextValue(commentValue);
    }
  }, [commentValue]);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (type === "post") {
      postReflyCommentMutation.mutate(textValue);
    } else if (type === "put" && toggleState) {
      putReflyCommentMutation.mutate(textValue);
      toggleState();
    }
  };

  const handelToggle = () => {
    if (toggleState) {
      toggleState();
    }
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="flex min-h-32 gap-1 rounded-lg border border-solid border-gray-200 p-3 mb:min-h-[150px] tbc:min-h-[200px] tbr:min-h-[150px]">
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
