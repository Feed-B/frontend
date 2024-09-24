import Image from "next/image";
import React from "react";
import commentBubbleIcon from "@/public/icons/commentBubble.svg";

interface Props {
  commentCount: number;
}

function CommentCount({ commentCount }: Props) {
  return (
    <div className="flex h-fit items-center gap-1">
      <Image src={commentBubbleIcon} alt="댓글 갯수입니다." width={20} />
      <p className="text-xs text-gray-600">{commentCount}</p>
    </div>
  );
}

export default CommentCount;
