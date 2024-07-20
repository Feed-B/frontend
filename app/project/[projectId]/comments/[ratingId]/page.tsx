import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ScrollToTopButton from "@/app/_components/Button/DirectionButton";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import ToastContainer from "@/app/_components/Toast/ToastContainer";
import CommentInput from "./_components/CommentInput";
import ReflyCommentList from "./_components/ReflyCommentList";
import CommentSection from "./_components/CommentSection";

interface Props {
  params: {
    ratingId: number;
    projectId: number;
  };
}

async function CommentPage({ params }: Props) {
  const queryClient = new QueryClient();

  const reflyCommentListQuery = commentQueryKeys.reflyList({
    projectId: params.projectId,
    ratingId: params.ratingId,
    page: 1,
    size: 10,
  });

  await queryClient.prefetchQuery(commentQueryKeys.detail(params.ratingId));
  await queryClient.prefetchInfiniteQuery({
    queryKey: reflyCommentListQuery.queryKey,
    queryFn: reflyCommentListQuery.queryFn,
    initialPageParam: 1 as never,
    getNextPageParam: (lastPage: any) => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="mx-auto w-[1200px]">
        <ScrollToTopButton className="fixed bottom-10 right-10 hover:animate-positionUp" direction="top" />
        <CommentSection projectId={params.projectId} ratingId={params.ratingId} />
        <section className="mt-12">
          <CommentInput ratingId={params.ratingId} type="post" />
        </section>
        <ReflyCommentList ratingId={params.ratingId} />
      </div>
      <ToastContainer />
    </HydrationBoundary>
  );
}

export default CommentPage;
