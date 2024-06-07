import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/star2.svg";
import grayStarIcon from "@/public/icons/grayStar.svg";
import halfStarIcon from "@/public/icons/halfStar.svg";

const TestData = {
  totalRating: 3.4, //댓글 별점 평균 3.4
  rating: {
    idea: 4, //3.7
    design: 3,
    feature: 2,
    perfection: 1,
  },
};

const ratingLabels: { [key: string]: string } = {
  idea: "아이디어",
  design: "디자인",
  feature: "기능",
  perfection: "완성도",
};

const renderStars = (rating: number, max = 5) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <Image key={`full-${index}`} src={starIcon} alt="별점" width={16} height={16} />
      ))}
      {hasHalfStar && <Image key="half" src={halfStarIcon} alt="반별점" width={16} height={16} />}
      {[...Array(emptyStars)].map((_, index) => (
        <Image key={`empty-${index}`} src={grayStarIcon} alt="빈별점" width={16} height={16} />
      ))}
    </>
  );
};

function RatingBox() {
  return (
    <div className="flex w-full items-center gap-8 rounded-xl bg-gray-100 px-8 py-6">
      <div>
        <p className="text-5xl font-bold text-gray-900">{TestData.totalRating}</p>
      </div>
      <div>
        <p className="mb-1 text-sm font-semibold text-gray-900">총점</p>
        <div className="flex items-center">{renderStars(TestData.totalRating)}</div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 px-[6px]">
        {Object.entries(TestData.rating).map(([key, value]) => (
          <div key={key} className="flex items-center gap-1">
            <p className="text-xs text-gray-900">{ratingLabels[key]}</p>
            {renderStars(value)}
            <p className="text-[10px] text-gray-600">{value}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingBox;
