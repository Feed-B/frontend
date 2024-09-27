import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ScrollToTopButton from "@/app/_components/Button/DirectionButton";
import { commentQueryKey } from "@/app/_queryFactory/commentQuery";
import { revalidatePathAction } from "@/app/_utils/revalidationAction";
import { commentApi } from "@/app/_apis/commentApi";
import { reflyCommentQueryKey } from "@/app/_queryFactory/ReflyCommentQuery";
import { commentListApi } from "@/app/_apis/commentListApi";
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
  revalidatePathAction(`project/${params.projectId}/comments/${params.ratingId}`);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: commentQueryKey.detail(params.ratingId).queryKey,
    queryFn: async () => await commentApi.getComment(params.ratingId),
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: reflyCommentQueryKey.list().queryKey,
    queryFn: async () =>
      await commentListApi.getReflyCommentList({
        projectId: params.projectId,
        ratingId: params.ratingId,
        page: 1,
        size: 10,
      }),

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
      <main className="mx-auto w-[80%] max-w-[1200px] pc:w-[60%] pc:min-w-[1200px]">
        <ScrollToTopButton className="fixed bottom-10 right-10 z-20 hover:animate-positionUp" direction="top" />
        <CommentSection projectId={params.projectId} ratingId={params.ratingId} />
        <section className="mt-12">
          <CommentInput projectId={params.projectId} ratingId={params.ratingId} type="post" />
        </section>
        <ReflyCommentList ratingId={params.ratingId} projectId={params.projectId} />
      </main>
    </HydrationBoundary>
  );
}

export default CommentPage;
