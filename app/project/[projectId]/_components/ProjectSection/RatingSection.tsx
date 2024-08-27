"use client";

import React from "react";
import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import fullStarIcon from "@/public/icons/fullStar.svg";
import halfStarIcon from "@/public/icons/halfStar.svg";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import { TotalRatingResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { starPercent } from "@/app/_utils/rating";

interface Props {
  projectId: number;
}

const MAX_STAR = 5;

function RatingSection({ projectId }: Props) {
  const { data: totalRating }: UseQueryResult<TotalRatingResponse, Error> = useQuery(
    projectQueryKeys.totalRating(projectId)
  );
  if (!totalRating) return null;

  const { averageRank, rankCount } = totalRating;
  const ratingCategory = [
    { id: 1, name: "아이디어", rate: totalRating.ideaRank },
    { id: 2, name: "디자인", rate: totalRating.designRank },
    { id: 3, name: "기능", rate: totalRating.functionRank },
    { id: 4, name: "완성도", rate: totalRating.completionRank },
  ];

  let isInteger = true;
  if (averageRank % 1 !== 0) isInteger = false;

  return (
    <section className="flex flex-col gap-2 pc:flex-row pc:gap-8 pc:py-4">
      {/* 평균 별점 */}
      <div className="flex min-w-fit flex-col items-center gap-1 pc:gap-2">
        <p className="-mb-3 text-[40px] font-bold text-gray-900 pc:mb-0 pc:text-5xl">{averageRank}</p>
        <div className="flex">
          {[...Array(Math.floor(averageRank))].map((_, index) => (
            <Image src={fullStarIcon} alt="노란색 별." width={25} key={index} />
          ))}
          {!isInteger && <Image src={halfStarIcon} alt="절반 별." width={25} />}
          {[...Array(Math.floor(MAX_STAR - averageRank))].map((_, index) => (
            <Image src={emptyStarIcon} alt="회색 별." width={25} key={index} />
          ))}
        </div>
        <p className="text-xs text-gray-600 pc:text-sm">평균 별점({rankCount}명)</p>
      </div>
      {/* 상세 별점 */}
      <div className="flex w-full flex-col justify-between gap-1">
        {ratingCategory.map(category => (
          <div className="flex items-center justify-between gap-3" key={category.id}>
            <p className="min-w-12 text-right text-xs text-gray-900 pc:min-w-[72px] pc:text-sm">{category.name}</p>
            <div className="h-5 w-full rounded bg-gray-200 pc:h-3">
              <div className={"h-5 rounded bg-yellow-500 pc:h-3"} style={{ width: starPercent(category.rate) }} />
            </div>
            <p className="min-w-6 text-right text-sm font-semibold text-blue-500 pc:text-base pc:font-bold">
              {category.rate.toString().padEnd(3, ".0")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RatingSection;
