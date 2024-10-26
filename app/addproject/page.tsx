import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "../_utils/getQueryClient";
import AddProjectContainer from "./AddProject/AddProjectContainer";

function AddProject() {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="mx-auto px-5 tbr:max-w-[1240px] pc:max-w-[1240px]">
        <h1 className="mb-4 mt-16 w-full text-start text-[28px] font-bold text-gray-900 mb:mb-2 mb:mt-20 mb:text-xl mb:font-semibold tbc:mt-20">
          프로젝트 업로드
        </h1>
        <hr />
        <AddProjectContainer />
      </main>
    </HydrationBoundary>
  );
}

export default AddProject;
