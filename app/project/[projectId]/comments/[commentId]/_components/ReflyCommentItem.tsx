import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import { JOB_CATEGORIES_KR, JobCategoriesType } from "@/app/_constants/JobCategoryData";
import ReflyDropbox from "./ReflyDropbox";

interface ReflyCommentItemProp {
  replyComment: {
    userId: number;
    job: string;
    author: string;
    comment: string;
    replyId: number;
  };
}

function ReflyCommentItem({ replyComment }: ReflyCommentItemProp) {
  const { data: userId } = useQuery(userQueryKeys.userId());

  return (
    <div className="relative mt-2 flex gap-3 p-2">
      <ProfileImage imageUrl="default" className="h-6 w-6" />
      <div>
        <div className="mb-2 flex items-center gap-1">
          <p className="text-sm font-normal text-gray-900">{replyComment.author}</p>
          <p className="text-[10px] font-normal text-blue-400">
            {JOB_CATEGORIES_KR[replyComment.job as JobCategoriesType]}
          </p>
        </div>
        <p className="text-sm font-normal text-gray-600">{replyComment.comment}</p>
      </div>
      <div className="absolute right-0">
        {userId?.id === replyComment.userId && <ReflyDropbox reflyId={replyComment.replyId} />}
      </div>
    </div>
  );
}

export default ReflyCommentItem;
