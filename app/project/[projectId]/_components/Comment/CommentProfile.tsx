import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

function CommentProfile() {
  return (
    <div className="flex items-center gap-2">
      <ProfileImage imageUrl="defalut" className="h-10 w-10" />
      <div>
        <p className="text-sm font-semibold">일이삼사오육칠팔</p>
        <p className="text-[10px] text-blue-500">프론트엔드</p>
      </div>
    </div>
  );
}

export default CommentProfile;
