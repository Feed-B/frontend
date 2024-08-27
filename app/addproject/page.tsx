import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_queryFactory/getQueryClient";
import AddProjectContainer from "./AddProject/AddProjectContainer";

function AddProject() {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="mx-auto px-5 pc:max-w-[1264px]">
        <h1 className="mb-4 mt-16 w-full text-start text-[28px] font-bold text-gray-900 mb:mb-2 mb:mt-8 mb:text-xl mb:font-semibold">
          프로젝트 업로드
        </h1>
        <hr />
        <AddProjectContainer />
      </main>
    </HydrationBoundary>
  );
}

export default AddProject;
