import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/fullStar.svg";
import grayStarIcon from "@/public/icons/emptyStar.svg";
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
        <Image key={`full-${index}`} src={starIcon} alt="별점" width={16} />
      ))}
      {hasHalfStar && <Image key="half" src={halfStarIcon} alt="반별점" width={16} />}
      {[...Array(emptyStars)].map((_, index) => (
        <Image key={`empty-${index}`} src={grayStarIcon} alt="빈별점" width={16} />
      ))}
    </>
  );
};

function RatingBox() {
  return (
    <div className="flex w-full items-center justify-center gap-10 rounded-xl bg-gray-100 px-8 py-6">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-gray-900">총점</p>
        <p className="text-2xl font-bold text-gray-900">{TestData.totalRating}</p>
        <div className="flex items-center">{renderStars(TestData.totalRating)}</div>
      </div>
      <div className="flex items-center gap-4">
        {Object.entries(TestData.rating).map(([key, value]) => (
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
