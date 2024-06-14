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
      <div className="flex justify-between">
        <CommentProfile />
        <CommentCount />
      </div>
      <p className="text-overflow h-14 text-sm text-gray-900">{comment.comment}</p>
      <TotalStar />
      <Image className="absolute bottom-6 right-4" src={arrowIcon} alt="댓글 상세보기." width={24} />
    </div>
  );
}

export default CommentCard;
