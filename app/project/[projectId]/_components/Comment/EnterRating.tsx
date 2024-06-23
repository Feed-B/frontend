"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";
import { useEnterCommentContext } from "../../_context/EnterCommentProvider";

const ratingCategory = [
  { id: 0, name: "아이디어" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기능" },
  { id: 3, name: "완성도" },
];

const MAX_STAR = 5;

interface Props {
  ratingValue?: number[];
}

function WriteRating({ ratingValue }: Props) {
  const { rating, setRating, handleMouseDown, handleMouseMove, handleMouseUp } = useEnterCommentContext();

  useEffect(() => {
    if (ratingValue) setRating(ratingValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratingValue]);

  return (
    <>
      <div className="flex w-full justify-between px-3" onMouseUp={handleMouseUp}>
        {ratingCategory.map(category => (
          <div className="flex flex-col gap-1.5" key={category.id}>
            <p className="text-base font-medium text-gray-900">{category.name}</p>
            <div className="flex items-center">
              {[...Array(MAX_STAR)].map((_, index) => (
                <Image
                  src={index < rating[category.id] ? fullStarIcon : emptyStarIcon}
                  alt={index < rating[category.id] ? "노란색 별" : "회색 별"}
                  width={40}
                  key={index}
                  onMouseDown={() => handleMouseDown(category.id, index + 1)}
                  onMouseMove={() => handleMouseMove(category.id, index + 1)}
                />
              ))}
              <p className="h-full min-w-7 content-end text-sm tracking-widest text-gray-600">
                {rating[category.id]}/{MAX_STAR}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WriteRating;
