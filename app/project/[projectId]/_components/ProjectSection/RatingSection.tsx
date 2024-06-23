"use client";

import React from "react";
import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fullStarIcon from "@/public/icons/fullStar.svg";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import { TotalRatingResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";

interface Props {
  projectId: number;
}

function RatingSection({ projectId }: Props) {
  const { data: totalRating }: UseQueryResult<TotalRatingResponse, Error> = useQuery(
    projectQueryKeys.rating(projectId)
  );
  if (!totalRating) return null;

  const ratingCategory = [
    { id: 1, name: "아이디어", rate: totalRating.ideaRank },
    { id: 2, name: "디자인", rate: totalRating.designRank },
    { id: 3, name: "기능", rate: totalRating.functionRank },
    { id: 4, name: "완성도", rate: totalRating.completionRank },
  ];

  const MAX_STAR = 5;

  const starPercent = (rate: number) => {
    const percent = (rate / MAX_STAR) * 100;
    return String(percent) + "%";
  };

  return (
    <section className="flex gap-8 px-8 py-4">
      <div className="flex min-w-fit flex-col items-center gap-3">
        <p className="text-5xl font-bold text-gray-900">{totalRating.averageRank}</p>
        <div className="flex">
          {/* 추후 기능 추가시 수정 예정 */}
          <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={25} />
        </div>
        <p className="text-sm text-gray-600">평균 별점({totalRating.rankCount}명)</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        {ratingCategory.map(category => (
          <div className="flex items-center justify-between gap-3" key={category.id}>
            <p className="min-w-[72px] text-right text-sm text-gray-900">{category.name}</p>
            <div className="h-3 w-full rounded bg-gray-200">
              <div className={"h-3 rounded bg-yellow-500"} style={{ width: starPercent(category.rate) }} />
            </div>
            <p className="min-w-6 text-right text-base font-bold text-blue-500">{category.rate}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RatingSection;
