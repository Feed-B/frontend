import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/app/_utils/getQueryClient";
import EditProjectContainer from "./EditProject/EditProjectContainer";

interface Props {
  params: {
    projectId: number;
  };
}

function page({ params }: Props) {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="mx-auto px-5 tbr:max-w-[1240px] pc:max-w-[1240px]">
        <h1 className="mb-4 mt-16 w-full text-start text-[28px] font-bold text-gray-900 mb:mb-2 mb:mt-20 mb:text-xl mb:font-semibold tbc:mt-20">
          프로젝트 수정
        </h1>
        <hr />
        <EditProjectContainer projectId={params.projectId} />
      </main>
    </HydrationBoundary>
  );
}

export default page;
