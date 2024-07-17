"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/public/icons/blackArrowRight.svg";
import CommentProfile from "./CommentProfile";
import CommentCount from "./CommentCount";
import TotalStar from "./TotalStar";

interface CommentProps {
  projectId: number;
  comment: {
    commentId: number;
    authorId: number;
    authorName: string;
    job: string;
    comment: string;
    averageStarRank: number;
    childCommentCount: number;
  };
}

function CommentCard({ projectId, comment }: CommentProps) {
  return (
    <Link href={`/project/${projectId}/comments/${comment.commentId}?userId=${comment.authorId}`}>
      <div className="relative flex flex-col justify-between gap-4 rounded-xl bg-gray-100 p-4 hover:bg-gray-200">
        <div className="flex items-center justify-between">
          <CommentProfile
            userId={comment.authorId}
            userJob={comment.job}
            userName={comment.authorName}
            userProfileImageUrl=""
          />
          <CommentCount commentCount={comment.childCommentCount} />
        </div>
        <p className="text-overflow-3 h-14 text-sm text-gray-600">{comment.comment}</p>
        <div className="flex justify-between">
          <TotalStar starRating={comment.averageStarRank} />
          <div className="flex items-center">
            <p className="text-xs text-gray-900">더보기</p>
            <Image src={arrowIcon} alt="댓글 상세보기." width={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CommentCard;
