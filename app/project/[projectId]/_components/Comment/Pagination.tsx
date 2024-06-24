"use client";

import Image from "next/image";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import previousIcon from "@/public/icons/blackArrowLeft.svg";
import nextIcon from "@/public/icons/blackArrowRight.svg";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { CommentsListResponse } from "@/app/_apis/schema/commentResponse";
import CommentCard from "./CommentCard";

// //mock data
// const CommentList = [
//   {
//     id: 1,
//     name: "하잉",
//     comment:
//       "안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다.",
//     rating: [
//       {
//         idea: 4.5,
//         design: 3.5,
//         feature: 3,
//         perfection: 5,
//       },
//     ],
//     total: 3.5,
//   },
//   {
//     id: 2,
//     name: "하잉2",
//     comment: "안녕하세요 댓글입니다.",
//     rating: [
//       {
//         idea: 4.5,
//         design: 3.5,
//         feature: 3,
//         perfection: 5,
//       },
//     ],
//     total: 3.5,
//   },
//   {
//     id: 3,
//     name: "하잉2",
//     comment: "안녕하세요 댓글입니다.",
//     rating: [
//       {
//         idea: 4.5,
//         design: 3.5,
//         feature: 3,
//         perfection: 5,
//       },
//     ],
//     total: 3.5,
//   },
//   {
//     id: 4,
//     name: "하잉2",
//     comment: "안녕하세요 댓글입니다.",
//     rating: [
//       {
//         idea: 4.5,
//         design: 3.5,
//         feature: 3,
//         perfection: 5,
//       },
//     ],
//     total: 3.5,
//   },
// ];

interface Props {
  projectId: number;
}

function Pagination({ projectId }: Props) {
  const { data: commentList }: UseQueryResult<CommentsListResponse, Error> = useQuery(
    commentQueryKeys.list({ projectId: projectId, size: 8, page: 1 })
  );

  if (!commentList) return null;
  const { totalElements } = commentList.customPageable;
  return (
    <>
      <div className="grid grid-cols-4 gap-x-6 gap-y-5">
        {commentList.content.map(comment => (
          <CommentCard key={comment.authorId} comment={comment} totalComment={totalElements} />
        ))}
      </div>
      {totalElements > 0 && (
        <div className="mt-8 flex justify-center gap-4">
          <button>
            <Image src={previousIcon} alt={"이전 페이지."} width={24} />
          </button>
          <div className="flex gap-4 text-gray-900">
            <p className="rounded bg-gray-200 px-2 py-1">1</p>
            {/* <p className="rounded px-2 py-1 hover:bg-gray-100">2</p>
            <p className="rounded px-2 py-1 hover:bg-gray-100">3</p>
            <p className="rounded px-2 py-1 hover:bg-gray-100">4</p>
            <p className="rounded px-2 py-1 hover:bg-gray-100">5</p> */}
          </div>
          <button>
            <Image src={nextIcon} alt={"다음 페이지."} width={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default Pagination;
