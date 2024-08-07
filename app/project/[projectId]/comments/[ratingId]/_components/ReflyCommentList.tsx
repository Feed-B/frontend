"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { commentApi } from "@/app/_apis/comment";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import ReflyCommentItem from "./ReflyCommentItem";

interface ReflyCommentListProps {
  ratingId: number;
  projectId: number;
}

function ReflyCommentList({ ratingId, projectId }: ReflyCommentListProps) {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });

  const reflyCommentListQuery = commentQueryKeys.reflyList({ ratingId: ratingId });

  const { data: reflyPage, fetchNextPage } = useInfiniteQuery({
    queryKey: reflyCommentListQuery.queryKey,
    queryFn: ({ pageParam = 1 }) => commentApi.getReflyCommentList({ ratingId, page: pageParam, size: 10 }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });

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
