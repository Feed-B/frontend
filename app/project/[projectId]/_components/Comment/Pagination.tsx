"use client";

import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import grayBee from "@/public/beeIcons/grayBee.svg";
import previousIcon from "@/public/icons/blackArrowLeft.svg";
import nextIcon from "@/public/icons/blackArrowRight.svg";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { CommentListResponse } from "@/app/_apis/schema/commentResponse";
import { useCurrentPageContext } from "../../_context/CurrentPageProvider";
import CommentCard from "./CommentCard";

interface Props {
  projectId: number;
}

const UNIT_PAGE = 5;

function Pagination({ projectId }: Props) {
  const { currentPage, setCurrentPage } = useCurrentPageContext();
  const { data: commentList }: UseQueryResult<CommentListResponse, Error> = useQuery(
    commentQueryKeys.list({ projectId: projectId, page: currentPage })
  );

  if (!commentList) return null;

  const { totalPages, totalElements, first, last } = commentList.customPageable;

  const moveNextPage = () => {
    if (!last) setCurrentPage((prev: number) => prev + 1);
  };

  const movePreviousPage = () => {
    if (!first) setCurrentPage((prev: number) => prev - 1);
  };

  const groupPage = Math.ceil(currentPage / UNIT_PAGE);
  const startPage = (groupPage - 1) * UNIT_PAGE + 1;
  const endPage = Math.min(groupPage * UNIT_PAGE, totalPages);

  const pageList = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <>
      <div className={`grid grid-cols-4 gap-x-6 gap-y-5 ${totalPages > 1 && "grid-rows-2"}`}>
        {commentList.content.map(comment => (
          <CommentCard key={comment.authorId} projectId={projectId} comment={comment} />
        ))}
      </div>
      {totalElements > 0 ? (
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={movePreviousPage}>
            <Image src={previousIcon} alt="이전 페이지." width={24} />
          </button>
          <div className="flex gap-4 text-gray-900">
            {pageList.map(page => (
              <p
                key={page}
                className={`rounded px-2 py-1 ${currentPage === page ? "bg-gray-200" : "hover:bg-gray-100"}`}
                onClick={() => setCurrentPage(page)}>
                {page}
              </p>
            ))}
          </div>
          <button onClick={moveNextPage}>
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
