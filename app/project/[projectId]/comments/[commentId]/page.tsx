import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ScrollToTopButton from "@/app/_components/Button/DirectionButton";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { commentApi } from "@/app/_apis/comment";
import CommentInput from "./_components/CommentInput";
import ReflyCommentList from "./_components/ReflyCommentList";
import CommentSection from "./_components/CommentSection";

interface Props {
  params: {
    commentId: number;
    projectId: number;
  };
}

async function CommentPage({ params }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(commentQueryKeys.detail(params.projectId, params.commentId));
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["comment", "reflyList", "reflyCommentList"],
    queryFn: async () => {
      const response = await commentApi.getReflyCommentList({
        projectId: params.projectId,
        commentId: params.commentId,
        page: 1,
        size: 10,
      });
      return response;
    },
    initialPageParam: 1,
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
        <ScrollToTopButton className="fixed bottom-10 right-10" direction="top" />
        <CommentSection projectId={params.projectId} commentId={params.commentId} />
        <section className="mt-12">
          <CommentInput projectId={params.projectId} commentId={params.commentId} />
        </section>
        <ReflyCommentList projectId={params.projectId} commentId={params.commentId} />
      </div>
    </HydrationBoundary>
  );
}

export default CommentPage;
