import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

function ReflyCommentItem() {
  return (
    <div className="mt-2 flex gap-3 p-2">
      <ProfileImage imageUrl={""} className="h-6 w-6" />
      <div>
        <div className="mb-2 flex items-center gap-1">
          <p className="text-sm font-normal text-gray-900">김한주</p>
          <p className="text-[10px] font-normal text-blue-400">프론트엔드</p>
        </div>
        <p className="text-sm font-normal text-gray-600">모달 만들어버리기</p>
      </div>
    </div>
  );
}

export default ReflyCommentItem;
