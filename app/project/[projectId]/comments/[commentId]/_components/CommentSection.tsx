"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import shareIcon from "@/public/icons/share.svg";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import CommentProfile from "../../../_components/Comment/CommentProfile";
import CommentCount from "../../../_components/Comment/CommentCount";
import RatingBox from "./RatingBox";
import CommentDropbox from "./CommentDropbox";

interface CommentSectionProps {
  projectId: number;
  commentId: number;
}

function CommentSection({ projectId, commentId }: CommentSectionProps) {
  const { data } = useQuery(commentQueryKeys.detail(projectId, commentId));

  if (!data) {
    return <div>없음</div>;
  }

  return (
    <>
      <section className="mt-10 w-full p-4">
        <div className="flex items-center justify-between">
          <CommentProfile userId={data?.authorId} userName={data.authorName} userJob={data.job} />
          <div className="relative flex items-center gap-2">
            <CommentCount commentCount={data.childCommentCount} />
            <Image className="cursor-pointer" src={shareIcon} alt="공유하기." width={24} />
            <CommentDropbox />
          </div>
        </div>
        <p className="mt-4 min-h-[230px] w-full text-sm font-normal text-gray-900">{data?.comment}</p>
      </section>
      <section className="mt-4">
        <RatingBox />
      </section>
    </>
  );
}

export default CommentSection;
