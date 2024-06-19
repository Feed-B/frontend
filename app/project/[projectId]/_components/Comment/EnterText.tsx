"use client";

import React from "react";
import Button from "@/app/_components/Button/Button";
import { useEnterCommentContext } from "../../_context/EnterCommentProvider";
import { useMyCommentContext } from "../../_context/MyCommentProvider";

const MAX_COMMENT_LIMIT = 150;

interface Props {
  mode?: "write" | "edit";
}

function WriteText({ mode = "write" }: Props) {
  const { comment, handleCommentChange } = useEnterCommentContext();
  const { setView } = useMyCommentContext();

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
      <div className="flex">
        {mode === "write" ? (
          <Button className="ml-auto" buttonSize="normal" bgColor="yellow">
            등록
          </Button>
        ) : (
          <>
            <Button className="ml-auto" buttonSize="normal" bgColor="white" onClick={() => setView("show")}>
              취소
            </Button>
            <Button className="ml-2" buttonSize="normal" bgColor="yellow" onClick={() => setView("show")}>
              수정
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default WriteText;
