import Image from "next/image";
import React from "react";
import commentBubbleIcon from "@/public/icons/commentBubble.svg";

interface Props {
  size?: "small" | "large";
  commentCount: number;
}

function CommentCount({ size = "small", commentCount }: Props) {
  return (
    <div className="flex h-fit items-center gap-1">
      <Image src={commentBubbleIcon} alt="댓글 갯수입니다." width={`${size === "small" ? 20 : 24}`} />
      <p className={`${size === "small" ? "text-xs text-gray-600" : "text-base font-medium text-gray-900"}`}>
        {commentCount}
      </p>
    </div>
  );
}

export default CommentCount;
