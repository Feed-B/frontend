import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/app/_queryFactory/getQueryClient";
import MyPageContent from "./_components/MyPageContent";

function MyPage() {
  const queryClient = getQueryClient();

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <MyPageContent />
    </HydrationBoundary>
  );
}

export default MyPage;
