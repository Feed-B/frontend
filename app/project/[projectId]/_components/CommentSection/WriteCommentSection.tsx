import React from "react";
import Image from "next/image";
import emptyStarIcon from "@/public/icons/emptyStar.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";
import feedbeeIcon from "@/public/icons/feedbee2.svg";
import Button from "@/app/_components/Button/Button";
import ToolTip from "../Comment/ToolTip";

const ratingCategory = [
  { id: 1, name: "아이디어", starCount: 1 },
  { id: 2, name: "디자인", starCount: 2 },
  { id: 3, name: "기능", starCount: 3 },
  { id: 4, name: "완성도", starCount: 4 },
];

const isLogin = false;
const MAX_COMMENT_LIMIT = 150;

function WriteCommentSection() {
  return (
    <section className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      {!isLogin && (
        <>
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-solid border-gray-200 bg-white px-8 py-4 shadow-lg">
            <div className="flex gap-1">
              <Image src={feedbeeIcon} alt="피드비." width={78} />
              <Image src={fullStarIcon} alt="별." width={28} height={75} />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">방금 보신 프로젝트, 마음에 드셨나요?</p>
              <p className="text-base text-gray-600">프로젝트를 평가하여 작성자에게 피드백을 전달하세요!</p>
            </div>
            <Button buttonSize="normal" bgColor="mainBlue">
              피드비 시작하기
            </Button>
          </div>
          <div className="absolute left-0 top-0 z-10 h-full w-full" />
        </>
      )}
      <div className={`${!isLogin && "blur-sm"}`}>
        <div className="mb-8 flex items-center gap-1">
          <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
          <ToolTip />
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
      </div>
    </section>
  );
}

export default WriteCommentSection;
