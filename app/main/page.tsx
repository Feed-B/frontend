import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_queryFactory/getQueryClient";
import SelectStack from "./_components/SelectStack/SelectStack";

async function MainPage() {
  const queryClient = getQueryClient();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  await queryClient.prefetchQuery({
    queryKey: ["project", "list", "projectList"],
    queryFn: async () => {
      const response = await fetch(BASE_URL + "/projects?sortCondition=RECENT&page=1&size=12&limit=0");
      const result = await response.json();
      return result;
    },
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="mx-auto mt-[100px] grid w-[1200px] grid-cols-[230px_minmax(976px,_1fr)] grid-rows-[100px_minmax(800px,_1fr)]">
        <SelectStack />
      </main>
    </HydrationBoundary>
  );
}

export default MainPage;
