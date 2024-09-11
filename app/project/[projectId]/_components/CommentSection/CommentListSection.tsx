"use client";

import React from "react";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import Pagination from "../Comment/Pagination";
import InfinityScroll from "../Comment/InfinityScroll";

interface Props {
  projectId: number;
}

const WINDOW_BOUNDARY = {
  MAX: {
    TBR: 1439,
    TBC: 1023,
    MB: 767,
  },
  MIN: {
    PC: 1440,
    TBR: 1024,
    TBC: 768,
  },
};

function CommentListSection({ projectId }: Props) {
  const { isLoggedIn } = useCheckLogin();
  const { windowWidth } = useBrowserSize();
  const { TBC } = WINDOW_BOUNDARY.MAX;

  return (
    <section className={`${!isLoggedIn && "blur-sm"}`}>
      <h3 className="mb-4 text-lg font-bold text-gray-900">프로젝트 리뷰</h3>
      {windowWidth > TBC ? <Pagination projectId={projectId} /> : <InfinityScroll projectId={projectId} />}
      {!isLoggedIn && <div className="absolute left-0 top-0 z-10 h-full w-full" />}
    </section>
  );
}

export default CommentListSection;
