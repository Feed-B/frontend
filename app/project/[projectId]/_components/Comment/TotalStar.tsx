import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/star2.svg";

function TotalStar() {
  return (
    <div className="h-[60px]">
      <p className="mb-1 text-base font-semibold text-[#1C1C1C]">총점</p>
      <div className="flex items-center gap-2">
        <Image src={starIcon} alt="총별점" width={24} />
        <p className="text-black text-xl font-bold">3.5</p>
      </div>
    </div>
  );
}

export default TotalStar;
