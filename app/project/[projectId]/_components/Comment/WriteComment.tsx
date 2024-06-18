"use client";

import React from "react";
import Button from "@/app/_components/Button/Button";
import { useMyCommentContext } from "../../_context/MyCommentProvider";
const MAX_COMMENT_LIMIT = 150;

function WriteComment() {
  const { comment, handleCommentChange } = useMyCommentContext();

  return (
    <>
      <div className="flex h-32 gap-1 rounded-lg border border-solid border-gray-200 bg-white p-3">
        <textarea
          onChange={handleCommentChange}
          className="h-full w-full resize-none bg-white text-sm text-gray-600 outline-none placeholder:text-gray-500"
          placeholder="댓글을 입력해주세요"
          maxLength={MAX_COMMENT_LIMIT}
        />
        <p className="mt-auto text-nowrap text-sm text-gray-500">
          {comment.length}/{MAX_COMMENT_LIMIT}
        </p>
      </div>
      <Button className="ml-auto" buttonSize="small" bgColor="mainBlue">
        등록
      </Button>
    </>
  );
}

export default WriteComment;
