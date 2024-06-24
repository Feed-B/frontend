"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import kebabIcon from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useToggleHook from "@/app/_hooks/useToggleHook";
import arrowIcon from "@/public/icons/blackArrowRight.svg";

import { MyCommentResponse } from "@/app/_apis/schema/commentResponse";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";
import TotalStar from "../../Comment/TotalStar";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";
import CommentProfile from "../../Comment/CommentProfile";
import CommentCount from "../../Comment/CommentCount";

interface Props {
  projectId: number;
  myComment: MyCommentResponse;
}

type JobCategory = keyof typeof JOB_CATEGORIES_KR;

function ShowComment({ projectId, myComment }: Props) {
  const { isOpen, toggleState } = useToggleHook();
  const { setView } = useMyCommentContext();

  if (!myComment.projectCommentResponseDto) return null;
  const { authorId, authorName, job, childCommentCount, comment, averageStarRank, commentId } =
    myComment.projectCommentResponseDto;

  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">내가 쓴 글</h3>
      <div className="relative flex flex-col gap-4 rounded-xl border border-solid border-gray-300 bg-gray-100 p-4">
        <div className="flex justify-between">
          <CommentProfile userId={authorId} userName={authorName} userJob={JOB_CATEGORIES_KR[job as JobCategory]} />
          <div className="flex items-center gap-2">
            <CommentCount size="large" commentCount={childCommentCount} />
            <Image className="relative" src={kebabIcon} alt="댓글 메뉴." width={24} onClick={toggleState} />
            {isOpen && (
              <DropDown className="w-fit translate-x-4 translate-y-16">
                <DropDown.TextItem onClick={() => setView("edit")}>수정</DropDown.TextItem>
                <DropDown.TextItem>삭제</DropDown.TextItem>
              </DropDown>
            )}
          </div>
        </div>
        <p className="text-overflow-3 h-14 text-sm text-gray-900">{comment}</p>
        <div className="flex justify-between">
          <TotalStar starRating={averageStarRank} />
          <Link href={`/project/${projectId}/comments/${commentId}?userId=${authorId}`}>
            <div className="flex items-center">
              <p className="text-xs text-gray-900">더보기</p>
              <Image src={arrowIcon} alt="댓글 상세보기." width={20} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowComment;
