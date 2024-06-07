import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/star2.svg";

function RatingBox() {
  return (
    <div className="flex w-full items-center gap-8 rounded-xl bg-gray-100 px-8 py-6">
      <div>
        <p className="text-5xl font-bold text-gray-900">3.5</p>
      </div>
      <div>
        <p className="mb-1 text-sm font-semibold text-gray-900">총점</p>
        <div className="flex items-center">
          <Image src={starIcon} alt="총 별점" width={25} />
          <Image src={starIcon} alt="총 별점" width={25} />
          <Image src={starIcon} alt="총 별점" width={25} />
          <Image src={starIcon} alt="총 별점" width={25} />
          <Image src={starIcon} alt="총 별점" width={25} />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 px-[6px]">
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-900">아이디어</p>
          <Image src={starIcon} alt="자세한 별점" width={16} />
          <Image src={starIcon} alt="자세한 별점" width={16} />
          <Image src={starIcon} alt="자세한 별점" width={16} />
          <Image src={starIcon} alt="자세한 별점" width={16} />
          <Image src={starIcon} alt="자세한 별점" width={16} />
          <p className="text-[10px] text-gray-600">2/5</p>
        </div>
      </div>
    </div>
  );
}

export default RatingBox;
