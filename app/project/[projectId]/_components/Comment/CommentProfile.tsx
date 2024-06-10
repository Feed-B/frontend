import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

function CommentProfile() {
  return (
    <div className="flex items-center gap-2">
      <ProfileImage imageUrl={""} className="h-6 w-6" />
      <p className="text-sm">김한주</p>
    </div>
  );
}

export default CommentProfile;
