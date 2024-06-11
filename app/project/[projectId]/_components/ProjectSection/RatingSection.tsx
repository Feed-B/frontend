import React from "react";
import Image from "next/image";
import fullStarIcon from "@/public/icons/fullStar.svg";
import emptyStarIcon from "@/public/icons/emptyStar.svg";

const ratingCategory = [
  { id: 1, name: "아이디어", rate: 4.1 },
  { id: 2, name: "디자인", rate: 2.7 },
  { id: 3, name: "기능", rate: 3.5 },
  { id: 4, name: "완성도", rate: 4.8 },
];

function RatingSection() {
  const MAX_STAR = 5;

  const starPercent = (rate: number) => {
    const percent = (rate / MAX_STAR) * 100;
    return String(percent) + "%";
  };

  return (
    <section className="flex gap-8 px-8 py-4">
      <div className="flex min-w-fit flex-col items-center gap-3">
        <p className="text-5xl font-bold">3.5</p>
        <div className="flex gap-0.5">
          {/* 추후 기능 추가시 수정 예정 */}
          <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={25} />
          <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={25} />
        </div>
        <p className="text-sm text-gray-600">리뷰 123개</p>
      </div>
      <div className="flex w-full flex-col gap-3">
        {ratingCategory.map(category => (
          <div className="flex items-center justify-between gap-3" key={category.id}>
            <p className="min-w-[72px] text-right text-sm font-semibold">{category.name}</p>
            <div className="h-5 w-full rounded bg-gray-200">
              <div className={"h-5 rounded bg-yellow"} style={{ width: starPercent(category.rate) }} />
            </div>
            <p className="text-base font-bold text-blue-500">{category.rate}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RatingSection;
