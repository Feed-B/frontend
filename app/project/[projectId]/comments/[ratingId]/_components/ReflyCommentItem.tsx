import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import { JOB_CATEGORIES_KR, JobCategoriesType } from "@/app/_constants/JobCategoryData";
import ReflyDropbox from "./ReflyDropbox";

interface ReflyCommentItemProp {
  replyComment: {
    authorId: number;
    job: string;
    authorName: string;
    comment: string;
    commentId: number;
    authorProfileImageUrl: string;
  };
}

function ReflyCommentItem({ replyComment }: ReflyCommentItemProp) {
  const { data: userId } = useQuery(userQueryKeys.userId());

  return (
    <div className="relative mt-2 flex gap-3 p-2">
      <Link href={`/profile/${userId?.id}`}>
        <ProfileImage imageUrl={replyComment.authorProfileImageUrl || "default"} className="h-6 w-6" />
      </Link>
      <div>
        <div className="mb-2 flex items-center gap-1">
          <Link href={`/profile/${userId?.id}`}>
            <p className="text-sm font-normal text-gray-900">{replyComment.authorName}</p>
          </Link>
          <p className="text-[10px] font-normal text-blue-400">
            {JOB_CATEGORIES_KR[replyComment.job as JobCategoriesType]}
          </p>
        </div>
        <p className="text-sm font-normal text-gray-600">{replyComment.comment}</p>
      </div>
      <div className="absolute right-0">
        {userId?.id === replyComment.authorId && <ReflyDropbox reflyId={replyComment.commentId} />}
      </div>
    </div>
  );
}

export default ReflyCommentItem;
