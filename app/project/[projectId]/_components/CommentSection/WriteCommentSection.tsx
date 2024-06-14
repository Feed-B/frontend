import React from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";
import infoIcon from "@/public/icons/info.svg";
import Button from "@/app/_components/Button/Button";

const ratingCategory = [
  { id: 1, name: "아이디어", starCount: 1 },
  { id: 2, name: "디자인", starCount: 2 },
  { id: 3, name: "기능", starCount: 3 },
  { id: 4, name: "완성도", starCount: 4 },
];

function WriteCommentSection() {
  const MAX_COMMENT_LIMIT = 150;

  return (
    <section className="flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      <div className="mb-8 flex items-center gap-1">
        <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
        <div className="group relative">
          <Image src={infoIcon} alt="평가 기준 설명." width={24} height={24} />
          <div className="absolute left-6 translate-y-1 text-nowrap rounded-bl-lg rounded-br-lg rounded-tr-lg bg-gray-800 p-4 text-sm text-white opacity-0 transition-all duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            1. 아이디어 부문은 프로젝트의 독창성을 의미합니다.
            <br />
            2. 디자인 부문은 프로젝트의 사용성과 미적 완성도를 의미합니다.
            <br />
            3. 기능은 서비스 요소들의 기능적 완성도와 구현 정도를 의미합니다.
            <br />
            4. 완성도는 전반적인 서비스의 만족감과 사용 후 만족감을 의미합니다.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex w-full justify-between px-3">
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
            className="h-full w-full resize-none bg-white text-sm text-black outline-none placeholder:text-gray-500"
            placeholder="댓글을 입력해주세요"
            maxLength={MAX_COMMENT_LIMIT}
          />
          <p className="mt-auto text-nowrap text-sm text-gray-500">0/{MAX_COMMENT_LIMIT}</p>
        </div>
        <Button className="ml-auto" buttonSize="small" bgColor="mainBlue">
          등록
        </Button>
      </div>
    </section>
  );
}

export default WriteCommentSection;
