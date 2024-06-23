import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_queryFactory/getQueryClient";
import AddProjectContainer from "./AddProject/AddProjectContainer";

function page() {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="mx-auto grid w-[1200px]">
        <h1 className="mb-4 mt-16 w-full text-start text-[28px] font-bold text-gray-900">프로젝트 업로드</h1>
        <hr />
        <AddProjectContainer />
      </main>
    </HydrationBoundary>
  );
}

export default page;
