import React from "react";
import Button from "@/app/_components/Button/Button";

function CommentInput() {
  return (
    <form className="flex min-h-32 gap-1 rounded-lg border border-solid border-gray-200 p-3">
      <textarea className="w-full resize-none bg-transparent outline-none" placeholder="댓글을 입력해주세요" />
      <div className="flex flex-col justify-between">
        <p className="text-end text-sm text-gray-500">0/150</p>
        <Button bgColor="mainBlue" buttonSize="small" type="submit">
          등록
        </Button>
      </div>
    </form>
  );
}

export default CommentInput;
