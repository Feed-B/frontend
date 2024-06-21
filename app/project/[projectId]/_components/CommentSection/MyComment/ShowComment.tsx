"use client";

import React from "react";
import Image from "next/image";
import kebabIcon from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useToggleHook from "@/app/_hooks/useToggleHook";
import arrowIcon from "@/public/icons/blackArrowRight.svg";
import CommentProfile from "../../Comment/CommentProfile";
import CommentCount from "../../Comment/CommentCount";
import TotalStar from "../../Comment/TotalStar";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";

function ShowComment() {
  const { isOpen, toggleState } = useToggleHook();
  const { setView } = useMyCommentContext();

  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">내가 쓴 글</h3>
      <div className="relative flex flex-col gap-4 rounded-xl border border-solid border-gray-300 bg-gray-100 p-4">
        <div className="flex justify-between">
          <CommentProfile />
          <div className="flex items-center gap-2">
            <CommentCount size="large" />
            <Image className="relative" src={kebabIcon} alt="댓글 메뉴." width={24} onClick={toggleState} />
            {isOpen && (
              <DropDown className="w-fit translate-x-4 translate-y-16">
                <DropDown.TextItem onClick={() => setView("edit")}>수정</DropDown.TextItem>
                <DropDown.TextItem>삭제</DropDown.TextItem>
              </DropDown>
            )}
          </div>
        </div>
        <p className="text-overflow-3 h-14 text-sm text-gray-900">댓글 내용입니다.</p>
        <div className="flex justify-between">
          <TotalStar />
          <div className="flex items-center">
            <p className="text-xs text-gray-900">더보기</p>
            <Image src={arrowIcon} alt="댓글 상세보기." width={20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowComment;
