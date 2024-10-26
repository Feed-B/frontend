"use client";

import React from "react";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import { WINDOW_BOUNDARY } from "@/app/_constants/WindowSize";
import Pagination from "./Pagination";
import InfinityScroll from "./InfinityScroll";

interface Props {
  projectId: number;
}

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
