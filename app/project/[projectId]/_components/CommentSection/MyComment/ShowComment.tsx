"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import kebabIcon from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useToggleHook from "@/app/_hooks/useToggleHook";
import arrowIcon from "@/public/icons/blackArrowRight.svg";
import { MyCommentResponse } from "@/app/_apis/schema/commentResponse";
import TotalStar from "../../Comment/TotalStar";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";
import CommentProfile from "../../Comment/CommentProfile";
import CommentCount from "../../Comment/CommentCount";

interface Props {
  projectId: number;
  myComment: MyCommentResponse;
}

function ShowComment({ projectId, myComment }: Props) {
  const { isOpen, toggleState } = useToggleHook();
  const { setView } = useMyCommentContext();

  if (!myComment.projectRating) return null;
  const { authorId, authorName, memberJob, childCommentCount, comment, averageRank, ratingId, authorProfileImageUrl } =
    myComment.projectRating;

  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">내가 쓴 리뷰</h3>
      <div className="relative flex flex-col gap-4 rounded-xl border border-solid border-gray-300 bg-gray-100 p-4">
        <div className="flex justify-between">
          <CommentProfile
            userId={authorId}
            userName={authorName}
            userJob={memberJob}
            userProfileImageUrl={authorProfileImageUrl}
          />
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
          <TotalStar starRating={averageRank} />
          <Link href={`/project/${projectId}/comments/${ratingId}?userId=${authorId}`}>
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
