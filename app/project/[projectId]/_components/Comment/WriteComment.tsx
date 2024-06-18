import React from "react";
import Button from "@/app/_components/Button/Button";

const MAX_COMMENT_LIMIT = 150;

const WriteComment = () => {
  return (
    <>
      <div className="flex h-32 gap-1 rounded-lg border border-solid border-gray-200 bg-white p-3 text-gray-500">
        <textarea
          className="h-full w-full resize-none bg-white text-sm text-black outline-none placeholder:text-gray-500"
          placeholder="댓글을 입력해주세요"
          maxLength={MAX_COMMENT_LIMIT}
        />
        <p className="mt-auto text-nowrap text-sm text-gray-500">0/{MAX_COMMENT_LIMIT}</p>
      </div>
      <Button className="ml-auto" buttonSize="small" bgColor="mainBlue">
        등록
      </Button>
    </>
  );
};

export default WriteComment;
