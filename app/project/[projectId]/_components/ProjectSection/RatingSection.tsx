import React from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";

const ratingCategory = [
  { id: 1, name: "아이디어", rate: 4.1 },
  { id: 2, name: "디자인", rate: 4.2 },
  { id: 3, name: "기능", rate: 4.3 },
  { id: 4, name: "완성도", rate: 4.4 },
];

function RatingSection() {
  return (
    <section className="flex">
      <div className="flex flex-col items-center gap-2">
        <Image src={emptyStarIcon} alt={"프로젝트 전체 별점."} width={120} />
        <p className="text-4xl font-bold">3.5</p>
      </div>
      <div className="ms-12 flex w-full flex-col gap-4">
        {ratingCategory.map(category => (
          <div className="flex justify-between" key={category.id}>
            <p className="text-xl">{category.name}</p>
            <div className="flex h-9 w-72 items-center">
              <p className="ms-9 text-xl font-bold">{category.rate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RatingSection;
