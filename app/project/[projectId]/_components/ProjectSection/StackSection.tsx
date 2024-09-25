"use client";

import React from "react";
import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import WishButtonAndCount from "@/app/_components/Button/WishButton";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import { WINDOW_BOUNDARY } from "@/app/_constants/WindowSize";

interface Props {
  projectId: number;
}

function StackSection({ projectId }: Props) {
  const { windowWidth } = useBrowserSize();
  const { TBC } = WINDOW_BOUNDARY.MIN;

  const { data }: UseQueryResult<ProjectResponse, Error> = useQuery(projectQueryKeys.detail(projectId));
  if (!data) return null;

  return (
    <>
      <section>
        <h3 className="mb-4 text-base font-bold pc:text-lg pc:font-semibold">사용한 스킬</h3>
        <ul className="flex flex-wrap gap-2">
          {data.projectTechStacks.map(stack => {
            const stackItem = FULL_STACK_DATA.find(item => item.name === stack.techStack);
            return (
              <li className="flex items-center gap-1 rounded-[44px] bg-gray-100 p-2" key={stack.id}>
                <Image src={stackItem?.image || ""} alt="기술 스택 이미지." width={20} />
                <p className="text-sm text-gray-900">{stack.techStack}</p>
              </li>
            );
          })}
        </ul>
      </section>
      {windowWidth < TBC && (
        <section className="flex justify-center">
          <WishButtonAndCount
            projectId={projectId}
            isFavorite={data.isLiked}
            wishCount={data.likeCount}
            colorMode="bright"
            windowSize="mobile"
          />
        </section>
      )}
    </>
  );
}

export default StackSection;
