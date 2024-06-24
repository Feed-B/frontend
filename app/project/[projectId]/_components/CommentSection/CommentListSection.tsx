import React from "react";
import Pagination from "../Comment/Pagination";

const isLogin = true;

interface Props {
  projectId: number;
}

function CommentListSection({ projectId }: Props) {
  return (
    <>
      <section className={`mt-10 ${!isLogin && "blur-sm"}`}>
        <h3 className="mb-4 text-lg font-bold text-gray-900">댓글</h3>
        <Pagination projectId={projectId} />
        {!isLogin && <div className="absolute left-0 top-0 z-10 h-full w-full" />}
      </section>
    </>
  );
}

export default CommentListSection;
