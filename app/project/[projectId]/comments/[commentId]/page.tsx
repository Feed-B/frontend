import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ScrollToTopButton from "@/app/_components/Button/DirectionButton";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
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

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="mx-auto w-[1200px]">
        <ScrollToTopButton className="fixed bottom-10 right-10" direction="top" />
        <CommentSection projectId={params.projectId} commentId={params.commentId} />
        <section className="mt-12">
          <CommentInput />
        </section>
        <ReflyCommentList />
      </div>
    </HydrationBoundary>
  );
}

export default CommentPage;
