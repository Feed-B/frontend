import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ScrollToTopButton from "@/app/_components/Button/DirectionButton";
import { revalidatePathAction } from "@/app/_utils/revalidationAction";
import { usePrefetchCommentDetail, usePrefetchReflyCommentList } from "@/app/_hooks/reactQuery/useCommentQuery";
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

  usePrefetchCommentDetail(queryClient, params.ratingId);

  usePrefetchReflyCommentList(queryClient, {
    projectId: params.projectId,
    ratingId: params.ratingId,
    page: 1,
    size: 10,
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
