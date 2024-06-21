import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_queryFactory/getQueryClient";
import { projectApi } from "../_apis/project";
import SelectStack from "./_components/SelectStack/SelectStack";

async function MainPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["project", "list", "projectList"],
    queryFn: async () => {
      const response = projectApi.getprojectList({ page: 1, size: 12 });
      return response;
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
