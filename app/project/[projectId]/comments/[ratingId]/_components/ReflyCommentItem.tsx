import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";
import useToggleHook from "@/app/_hooks/useToggleHook";
import ReflyDropbox from "./ReflyDropbox";
import CommentInput from "./CommentInput";

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
  const { isOpen: reflyCommentEditOpen, toggleState } = useToggleHook();

  const { data: userId } = useQuery(userQueryKeys.userId());

  return (
    <div className="relative mt-2 flex gap-3 p-2">
      {/* Profile Image */}
      <Link href={`/profile/${userId?.id}`} passHref>
        <ProfileImage imageUrl={replyComment.authorProfileImageUrl || "default"} className="h-6 w-6" />
      </Link>

      <div className="w-full">
        <div className="mb-2 flex items-center gap-1">
          <Link href={`/profile/${userId?.id}`} passHref>
            <p className="text-sm font-normal text-gray-900">{replyComment.authorName}</p>
          </Link>
          <p className="text-[10px] font-normal text-blue-400">{JOB_CATEGORIES_KR[replyComment.job]}</p>
        </div>
        {reflyCommentEditOpen ? (
          <CommentInput
            type="put"
            toggleState={toggleState}
            commentValue={replyComment.comment}
            commentId={replyComment.commentId}
          />
        ) : (
          <p className="text-sm font-normal text-gray-600">{replyComment.comment}</p>
        )}
      </div>
      {!reflyCommentEditOpen && userId?.id === replyComment.authorId && (
        <div className="absolute right-0">
          <ReflyDropbox reflyId={replyComment.commentId} toggleState={toggleState} />
        </div>
      )}
    </div>
  );
}

export default ReflyCommentItem;
