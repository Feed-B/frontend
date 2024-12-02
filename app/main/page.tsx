import React from "react";
import { cookies } from "next/headers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_utils/getQueryClient";
import { usePrefetchProjectList } from "../_hooks/reactQuery/useProjectQuery";
import SelectStack from "./_components/SelectStack/SelectStack";

function MainPage() {
  const queryClient = getQueryClient();
  const cookieStore = cookies();
  const ACCESS_TOKEN = cookieStore.get("ACCESS_TOKEN");

  usePrefetchProjectList(queryClient, { page: 1, size: 16 }, ACCESS_TOKEN?.value);

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
