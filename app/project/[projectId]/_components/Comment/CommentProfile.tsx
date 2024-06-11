import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

function CommentProfile() {
  return (
    <div className="flex items-center gap-2">
      <ProfileImage imageUrl={""} className="h-10 w-10" />
      <div>
        <p className="text-sm">김한주</p>
        <p className=" text-[10px] font-normal text-blue-400">프론트엔드</p>
      </div>
    </div>
  );
}

export default CommentProfile;
