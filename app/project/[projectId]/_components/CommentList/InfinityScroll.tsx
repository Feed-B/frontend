"use client";

import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import grayBee from "@/public/beeIcons/grayBee.svg";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { CommentListResponse } from "@/app/_apis/schema/commentListResponse";
import { useCurrentPageContext } from "../../_context/CurrentPageProvider";
import CommentCard from "./CommentCard";

interface Props {
  projectId: number;
}

function InfinityScroll({ projectId }: Props) {
  const { currentPage } = useCurrentPageContext();
  const { data: commentList }: UseQueryResult<CommentListResponse, Error> = useQuery(
    commentQueryKeys.list({ projectId: projectId, page: currentPage })
  );

  if (!commentList) return null;

  const { totalElements } = commentList.customPageable[0];

  return (
    <>
      {totalElements > 0 ? (
        <div className="flex flex-col gap-2">
          {commentList.content.map(comment => (
            <CommentCard key={comment.authorId} projectId={projectId} comment={comment} />
          ))}
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

export default InfinityScroll;
