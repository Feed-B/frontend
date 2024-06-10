import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

function ReflyCommentItem() {
  return (
    <div className="mt-1 flex gap-3 p-2">
      <ProfileImage imageUrl={""} className="h-10 w-10" />
      <div>
        <p className="mb-1 text-sm font-normal text-gray-900">김한주</p>
        <p className="text-sm font-normal text-gray-600">모달 만들어버리기</p>
      </div>
    </div>
  );
}

export default ReflyCommentItem;
