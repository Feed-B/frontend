import React from "react";
import Pagination from "../Comment/Pagination";
import CommentCard from "../Comment/CommentCard";

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
];

function CommentListSection() {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-bold">댓글</h3>
      <div className="grid grid-cols-4 gap-x-6 gap-y-3">
        {CommentList.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
      <Pagination />
    </section>
  );
}

export default CommentListSection;
