import React from "react";
import Link from "next/link";
import ProfileImage from "@/app/_components/Profile/ProfileImage";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { useCurrentUser } from "@/app/_hooks/reactQuery/useUserQuery";
import CommentInput from "./CommentInput";
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
  projectId: number;
}

function ReflyCommentItem({ replyComment, projectId }: ReflyCommentItemProp) {
  const { isOpen: reflyCommentEditOpen, toggleState } = useToggleHook();

  const { data: userId } = useCurrentUser();

  return (
    <div className="relative mt-2 flex gap-3 p-2">
      {/* Profile Image */}
      <Link href={`/profile/${replyComment.authorId}`}>
        <ProfileImage imageUrl={replyComment.authorProfileImageUrl || "default"} className="h-6 w-6" />
      </Link>

      <div className="w-full">
        <div className="mb-2 flex items-center gap-1">
          <Link href={`/profile/${replyComment.authorId}`} passHref>
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
            projectId={projectId}
          />
        ) : (
          <p className="whitespace-pre-wrap text-sm font-normal text-gray-600">{replyComment.comment}</p>
        )}
      </div>
      {!reflyCommentEditOpen && userId?.id === replyComment.authorId && (
        <div className="absolute right-0">
          <ReflyDropbox projectId={projectId} reflyId={replyComment.commentId} toggleState={toggleState} />
        </div>
      )}
    </div>
  );
}

export default ReflyCommentItem;
