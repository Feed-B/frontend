"use client";

import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useState } from "react";
import grayBee from "@/public/beeIcons/grayBee.svg";
import previousIcon from "@/public/icons/blackArrowLeft.svg";
import nextIcon from "@/public/icons/blackArrowRight.svg";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { CommentListResponse } from "@/app/_apis/schema/commentResponse";
import CommentCard from "./CommentCard";

interface Props {
  projectId: number;
}

function Pagination({ projectId }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: commentList }: UseQueryResult<CommentListResponse, Error> = useQuery(
    commentQueryKeys.list({ projectId: projectId, page: currentPage })
  );

  if (!commentList) return null;

  const { totalElements } = commentList.customPageable;

  console.log("commentList.customPageable", commentList.customPageable);

  return (
    <>
      <div className="grid grid-cols-4 gap-x-6 gap-y-5">
        {commentList.content.map(comment => (
          <CommentCard key={comment.authorId} projectId={projectId} comment={comment} />
        ))}
      </div>
      {totalElements > 0 ? (
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={() => setCurrentPage(prev => prev - 1)}>
            <Image src={previousIcon} alt="이전 페이지." width={24} />
          </button>
          <div className="flex gap-4 text-gray-900">
            <p
              className={`rounded px-2 py-1  ${currentPage === 1 ? "bg-gray-200" : "hover:bg-gray-100"}`}
              onClick={() => setCurrentPage(1)}>
              1
            </p>
            <p
              className={`rounded px-2 py-1  ${currentPage === 2 ? "bg-gray-200" : "hover:bg-gray-100"}`}
              onClick={() => setCurrentPage(2)}>
              2
            </p>
            <p
              className={`rounded px-2 py-1  ${currentPage === 3 ? "bg-gray-200" : "hover:bg-gray-100"}`}
              onClick={() => setCurrentPage(3)}>
              3
            </p>
            <p
              className={`rounded px-2 py-1  ${currentPage === 4 ? "bg-gray-200" : "hover:bg-gray-100"}`}
              onClick={() => setCurrentPage(4)}>
              4
            </p>
            <p
              className={`rounded px-2 py-1  ${currentPage === 5 ? "bg-gray-200" : "hover:bg-gray-100"}`}
              onClick={() => setCurrentPage(5)}>
              5
            </p>
          </div>
          <button onClick={() => setCurrentPage(prev => prev + 1)}>
            <Image src={nextIcon} alt="다음 페이지." width={24} />
          </button>
        </div>
      ) : (
        <div className="m-12 flex flex-col items-center gap-4">
          <Image src={grayBee} alt="울고 있는 회색 벌." />
          <p className="text-xl text-gray-600">첫 번째 리뷰를 남겨주세요</p>
        </div>
      )}
    </>
  );
}

export default Pagination;
