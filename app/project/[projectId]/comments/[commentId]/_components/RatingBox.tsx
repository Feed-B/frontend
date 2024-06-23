import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/fullStar.svg";
import grayStarIcon from "@/public/icons/emptyStar.svg";
import halfStarIcon from "@/public/icons/halfStar.svg";

interface RatingBoxProps {
  averageRank: number;
  completionRank: number;
  designRank: number;
  functionRank: number;
  ideaRank: number;
}

const ratingLabels: { [key: string]: string } = {
  ideaRank: "아이디어",
  designRank: "디자인",
  functionRank: "기능",
  completionRank: "완성도",
};

const renderStars = (rating: number, max = 5) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <Image key={`full-${index}`} src={starIcon} alt="별점" width={16} />
      ))}
      {hasHalfStar && <Image key="half" src={halfStarIcon} alt="반별점" width={16} />}
      {[...Array(emptyStars)].map((_, index) => (
        <Image key={`empty-${index}`} src={grayStarIcon} alt="빈별점" width={16} />
      ))}
    </>
  );
};

function RatingBox(props: RatingBoxProps) {
  const rating = {
    ideaRank: props.ideaRank,
    designRank: props.designRank,
    functionRank: props.functionRank,
    completionRank: props.completionRank,
  };

  return (
    <div className="flex w-full items-center justify-center gap-10 rounded-xl bg-gray-100 px-8 py-6">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-gray-900">총점</p>
        <p className="text-2xl font-bold text-gray-900">{props.averageRank}</p>
        <div className="flex items-center">{renderStars(props.averageRank)}</div>
      </div>
      <div className="flex items-center gap-4">
        {Object.entries(rating).map(([key, value]) => (
          <div key={key} className="flex items-center justify-end gap-1">
            <p className="text-xs text-gray-900">{ratingLabels[key]}</p>
            {renderStars(value)}
            <p className="min-w-5 text-[10px] text-gray-600">{value}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingBox;
