"use client";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function MyPageProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default MyPageProvider;
