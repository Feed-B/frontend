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
    <section className="flex gap-8 py-4 mb:flex-col mb:gap-2 mb:py-0 tbc:flex-col tbc:gap-2 tbc:py-0">
      {/* 평균 별점 */}
      <div className="flex min-w-fit flex-col items-center gap-2 mb:gap-1 tbc:gap-1">
        <p className="text-5xl font-bold text-gray-900 mb:text-[40px] tbc:text-[40px]">{averageRank}</p>
        <div className="flex">
          {[...Array(Math.floor(averageRank))].map((_, index) => (
            <Image src={fullStarIcon} alt="노란색 별." width={25} key={index} />
          ))}
          {!isInteger && <Image src={halfStarIcon} alt="절반 별." width={25} />}
          {[...Array(Math.floor(MAX_STAR - averageRank))].map((_, index) => (
            <Image src={emptyStarIcon} alt="회색 별." width={25} key={index} />
          ))}
        </div>
        <p className="text-sm text-gray-600 mb:text-xs tbc:text-xs">평균 별점({rankCount}명)</p>
      </div>
      {/* 상세 별점 */}
      <div className="flex w-full flex-col justify-between gap-1">
        {ratingCategory.map(category => (
          <div className="flex items-center justify-between gap-3" key={category.id}>
            <p className="min-w-[72px] text-right text-sm text-gray-900 mb:min-w-12 mb:text-xs tbc:min-w-12 tbc:text-xs">
              {category.name}
            </p>
            <div className="h-3 w-full rounded bg-gray-200 mb:h-5 tbc:h-5">
              <div
                className={"h-3 rounded bg-yellow-500 mb:h-5 tbc:h-5"}
                style={{ width: starPercent(category.rate) }}
              />
            </div>
            <p className="min-w-6 text-right text-base font-bold text-blue-500 mb:text-sm mb:font-semibold tbc:text-sm tbc:font-semibold">
              {category.rate.toString().padEnd(3, ".0")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RatingSection;
