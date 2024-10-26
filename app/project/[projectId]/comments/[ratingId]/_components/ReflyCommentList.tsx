"use client";

import React, { useEffect } from "react";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { useInfinityReflyCommentList } from "@/app/_hooks/reactQuery/useCommentQuery";
import ReflyCommentItem from "./ReflyCommentItem";

interface ReflyCommentListProps {
  ratingId: number;
  projectId: number;
}

function ReflyCommentList({ ratingId, projectId }: ReflyCommentListProps) {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });

  const { data: reflyPage, fetchNextPage } = useInfinityReflyCommentList({ ratingId, size: 10 });

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section className="relative mb-12 mt-6">
      <h3 className="mb-4">댓글 ({reflyPage?.pages[0].customPageable.totalElements})</h3>
      {reflyPage?.pages.map(reflyList =>
        reflyList.content.map(refly => (
          <ReflyCommentItem key={refly.commentId} replyComment={refly} projectId={projectId} />
        ))
      )}
      <div className="absolute bottom-0" ref={lastCardInfo} />
    </section>
  );
}

export default ReflyCommentList;
