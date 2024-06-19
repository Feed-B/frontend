import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { projectApi } from "../_apis/project";
import SelectStack from "./_components/SelectStack/SelectStack";

async function MainPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["projectList"],
    queryFn: () => {
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
