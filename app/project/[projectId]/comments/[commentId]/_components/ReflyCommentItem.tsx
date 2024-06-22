import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

interface ReflyCommentItemProp {
  replyComment: {
    userId: number; //작성자 ID
    techStack: string;
    name: string; //작성자 이름
    comment: string; //댓글 내용
  };
}

function ReflyCommentItem({ replyComment }: ReflyCommentItemProp) {
  return (
    <div className="mt-2 flex gap-3 p-2">
      <ProfileImage imageUrl="default" className="h-6 w-6" />
      <div>
        <div className="mb-2 flex items-center gap-1">
          <p className="text-sm font-normal text-gray-900">{replyComment.name}</p>
          <p className="text-[10px] font-normal text-blue-400">{replyComment.techStack}</p>
        </div>
        <p className="text-sm font-normal text-gray-600">{replyComment.comment}</p>
      </div>
    </div>
  );
}

export default ReflyCommentItem;
