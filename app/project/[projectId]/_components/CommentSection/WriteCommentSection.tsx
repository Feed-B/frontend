import React from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";
import infoIcon from "@/public/icons/info.svg";

const ratingCategory = [
  { id: 1, name: "아이디어", starCount: 1 },
  { id: 2, name: "디자인", starCount: 2 },
  { id: 3, name: "기능", starCount: 3 },
  { id: 4, name: "완성도", starCount: 4 },
];

function WriteCommentSection() {
  return (
    <section className="flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      <div className="mb-8 flex gap-2">
        <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
        <Image src={infoIcon} alt="평가 기준 설명." />
      </div>
      <div className="mb-6 flex w-full justify-between px-3">
        {ratingCategory.map(category => (
          <div className="flex flex-col gap-1.5" key={category.id}>
            <p className="text-base font-medium text-gray-900">{category.name}</p>
            <div className="flex items-center gap-1.5">
              {/* 추후 기능 추가시 수정 예정 */}
              <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={fullStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={32} />
              <Image src={emptyStarIcon} alt="프로젝트 평가 별점." width={32} />
              <p className="h-full content-end text-sm tracking-widest text-gray-600">{category.starCount}/5</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-32 gap-1 rounded-lg border border-solid border-gray-200 bg-white p-3 text-gray-500">
        <textarea
          className="h-full w-full resize-none bg-white text-sm text-black outline-none"
          placeholder="주제와 무관한 댓글은 삭제될 수 있습니다."
        />
        <div className="flex flex-col justify-between">
          <p className="text-end text-sm text-gray-500">0/150</p>
          <button className="whitespace-nowrap rounded-lg bg-gray-400 px-4 py-3 text-white">댓글 등록</button>
        </div>
      </div>
    </section>
  );
}

export default WriteCommentSection;
