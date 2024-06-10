import Image from "next/image";
import React from "react";
import commentIcon from "@/public/icons/reflyComment.svg";

function CommentCount() {
  return (
    <div className="flex items-center gap-1">
      <Image src={commentIcon} alt="댓글 갯수입니다." width={20} />
      <p className="text-base font-medium text-[#454545]">20</p>
    </div>
  );
}

export default CommentCount;
