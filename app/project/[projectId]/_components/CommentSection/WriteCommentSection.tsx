import React from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";

const ratingCategory = [
  { id: 1, name: "아이디어", starCount: 1 },
  { id: 2, name: "디자인", starCount: 2 },
  { id: 3, name: "기능", starCount: 3 },
  { id: 4, name: "완성도", starCount: 4 },
];

function WriteCommentSection() {
  return (
    <section className="flex flex-col gap-4 p-6">
      <p className="text-base font-bold text-[#1C1C1C]">프로젝트를 평가해주세요</p>
      <div className="flex w-full  justify-between">
        {ratingCategory.map(category => (
          <div className="flex flex-col gap-1.5" key={category.id}>
            <p className="text-sm text-[#1C1C1C]">{category.name}</p>
            <div className="flex items-center gap-0.5">
              {/* 추후 기능 추가시 수정 예정 */}
              <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={32} />
              <p className="text-xl font-bold">{category.starCount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-32 gap-1 rounded-lg bg-[#F8F8F8] p-3">
        <textarea
          className="h-full w-full resize-none bg-transparent outline-none"
          placeholder="주제와 무관한 댓글은 삭제될 수 있습니다."
        />
        <div className="flex flex-col justify-between">
          <p className="text-end text-sm text-[#404040]">0/150</p>
          <button className="whitespace-nowrap rounded-lg bg-[#454545] px-4 py-3 text-[#FFFFFF]">댓글 등록</button>
        </div>
      </div>
    </section>
  );
}

export default WriteCommentSection;
