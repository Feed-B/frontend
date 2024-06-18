"use client";

import React from "react";
import Image from "next/image";
import kebabIcon from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useToggleHook from "@/app/_hooks/useToggleHook";
import CommentProfile from "../../Comment/CommentProfile";
import CommentCount from "../../Comment/CommentCount";
import TotalStar from "../../Comment/TotalStar";

//임시 ID
const projectId = 1;

function ShowComment() {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">내가 쓴 글</h3>
      <div className="relative flex flex-col gap-4 rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
        <div className="flex justify-between">
          <CommentProfile />
          <div className="flex items-center gap-2">
            <CommentCount size="large" />
            <Image
              className="relative"
              src={kebabIcon}
              alt="프로젝트 메뉴."
              width={24}
              height={32}
              priority
              onClick={toggleState}
            />
            {isOpen && (
              <DropDown className="w-fit translate-x-4 translate-y-16">
                <DropDown.LinkItem href={`/project/${projectId}/edit`}>수정</DropDown.LinkItem>
                <DropDown.TextItem>삭제</DropDown.TextItem>
              </DropDown>
            )}
          </div>
        </div>
        <p className="h-8 text-sm text-gray-900">댓글입니다.</p>
        <div className="flex justify-between">
          <TotalStar />
          {/* 더보기 */}
        </div>
      </div>
    </>
  );
}

export default ShowComment;
