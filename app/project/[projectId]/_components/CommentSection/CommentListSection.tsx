"use client";

import React from "react";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import Pagination from "../Comment/Pagination";

interface Props {
  projectId: number;
}

function CommentListSection({ projectId }: Props) {
  const { isLoggedIn } = useCheckLogin();
  return (
    <>
      <section className={`mt-10 ${!isLoggedIn && "blur-sm"}`}>
        <h3 className="mb-4 text-lg font-bold text-gray-900">댓글</h3>
        <Pagination projectId={projectId} />
        {!isLoggedIn && <div className="absolute left-0 top-0 z-10 h-full w-full" />}
      </section>
    </>
  );
}

export default CommentListSection;
