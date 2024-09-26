"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/public/icons/blackArrowRight.svg";
import { Comment } from "@/app/_types/CommentType";
import CommentProfile from "../Comment/CommentProfile";
import CommentCount from "../Comment/CommentCount";
import TotalStar from "../Comment/TotalStar";

interface CommentProps {
  projectId: number;
  comment: Comment;
}

function CommentCard({ projectId, comment }: CommentProps) {
  return (
    <Link href={`/project/${projectId}/comments/${comment.ratingId}?userId=${comment.authorId}`}>
      <div className="relative flex flex-col justify-between gap-4 rounded-xl bg-gray-100 p-4 hover:bg-gray-200">
        <div className="flex items-center justify-between">
          <CommentProfile
            userId={comment.authorId}
            userJob={comment.memberJob}
            userName={comment.authorName}
            userProfileImageUrl={comment.authorProfileImageUrl}
          />
          <CommentCount commentCount={comment.childCommentCount} />
        </div>
        <p className="text-overflow-3 h-14 text-sm text-gray-600">{comment.comment}</p>
        <div className="flex justify-between">
          <TotalStar starRating={comment.averageRank} />
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
