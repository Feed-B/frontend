import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/app/_queryFactory/getQueryClient";
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
      <main className="mx-auto grid w-[1200px]">
        <h1 className="mb-4 mt-16 w-full text-start text-[28px] font-bold text-gray-900">프로젝트 수정</h1>
        <hr />
        <EditProjectContainer projectId={params.projectId} />
      </main>
    </HydrationBoundary>
  );
}

export default page;
