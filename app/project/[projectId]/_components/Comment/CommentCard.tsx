"use client";

import React from "react";
import Image from "next/image";
import arrowIcon from "@/public/icons/arrowRight.svg";
import CommentProfile from "./CommentProfile";
import CommentCount from "./CommentCount";
import TotalStar from "./TotalStar";

interface CommentProps {
  comment: {
    id: number;
    name: string;
    comment: string;
    rating: { idea: number; design: number; feature: number; perfection: number }[];
    total: number;
  };
}

function CommentCard({ comment }: CommentProps) {
  return (
    <div className="relative flex flex-col justify-between gap-4 rounded-xl bg-gray-100 p-4">
      <div className="flex items-center justify-between">
        <CommentProfile />
        <CommentCount />
      </div>
      <p className="text-overflow-3 h-14 text-sm text-gray-600">{comment.comment}</p>
      <div className="flex justify-between">
        <TotalStar />
        <div className="flex items-center">
          <p className="text-xs text-gray-900">더보기</p>
          <Image src={arrowIcon} alt="댓글 상세보기." width={20} />
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
