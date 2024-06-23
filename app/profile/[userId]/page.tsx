"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyPageContent from "./_components/MyPageContent";

function MyPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MyPageContent />
    </QueryClientProvider>
  );
}

export default MyPage;
