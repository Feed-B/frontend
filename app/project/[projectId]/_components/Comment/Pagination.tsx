import React from "react";
import CommentCard from "./CommentCard";

//mock data
const CommentList = [
  {
    id: 1,
    name: "하잉",
    comment:
      "안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다. 안녕하세요 댓글입니다.",
    rating: [
      {
        idea: 4.5,
        design: 3.5,
        feature: 3,
        perfection: 5,
      },
    ],
    total: 3.5,
  },
  {
    id: 2,
    name: "하잉2",
    comment: "안녕하세요 댓글입니다.",
    rating: [
      {
        idea: 4.5,
        design: 3.5,
        feature: 3,
        perfection: 5,
      },
    ],
    total: 3.5,
  },
  {
    id: 3,
    name: "하잉2",
    comment: "안녕하세요 댓글입니다.",
    rating: [
      {
        idea: 4.5,
        design: 3.5,
        feature: 3,
        perfection: 5,
      },
    ],
    total: 3.5,
  },
  {
    id: 4,
    name: "하잉2",
    comment: "안녕하세요 댓글입니다.",
    rating: [
      {
        idea: 4.5,
        design: 3.5,
        feature: 3,
        perfection: 5,
      },
    ],
    total: 3.5,
  },
  {
    id: 5,
    name: "하잉2",
    comment: "안녕하세요 댓글입니다.",
    rating: [
      {
        idea: 4.5,
        design: 3.5,
        feature: 3,
        perfection: 5,
      },
    ],
    total: 3.5,
  },
  {
    id: 6,
    name: "하잉2",
    comment: "안녕하세요 댓글입니다.",
    rating: [
      {
        idea: 4.5,
        design: 3.5,
        feature: 3,
        perfection: 5,
      },
    ],
    total: 3.5,
  },
];

function Pagination() {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-6 gap-y-5">
        {CommentList.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-5 p-2 text-gray-900">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
    </>
  );
}

export default Pagination;
