import React from "react";
import { cookies } from "next/headers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_queryFactory/getQueryClient";
import { projectQueryKeys } from "../_queryFactory/projectQuery";
import { revalidateTagAction } from "../_utils/revalidationAction";
import SelectStack from "./_components/SelectStack/SelectStack";

async function MainPage() {
  revalidateTagAction("pojectList");
  const queryClient = getQueryClient();
  const cookieStore = cookies();
  const ACCESS_TOKEN = cookieStore.get("ACCESS_TOKEN");

  const projectListQuery = projectQueryKeys.list({ page: 1, size: 16 }, ACCESS_TOKEN?.value);

  await queryClient.prefetchInfiniteQuery({
    queryKey: projectListQuery.queryKey,
    queryFn: projectListQuery.queryFn,
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
      <main className="mx-auto my-16 w-full max-w-[1200px] mb:my-8 mb:flex mb:flex-col mb:items-center tbc:my-10 tbc:flex tbc:flex-col tbc:items-center tbr:flex  tbr:flex-col tbr:items-center pc:grid pc:grid-cols-[230px_minmax(976px,_1fr)] pc:grid-rows-[100px_minmax(800px,_1fr)]">
        <SelectStack />
      </main>
    </HydrationBoundary>
  );
}

export default MainPage;
