import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/fullStar.svg";

interface Props {
  starRating: number;
}

function TotalStar({ starRating }: Props) {
  return (
    <div className="flex items-center gap-1">
      <Image src={starIcon} alt="총 별점." width={24} />
      <p className="text-sm font-semibold text-gray-900">{starRating}</p>
    </div>
  );
}

export default TotalStar;
