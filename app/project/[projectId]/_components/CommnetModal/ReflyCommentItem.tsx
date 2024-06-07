import React from "react";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

function ReflyCommentItem() {
  return (
    <div className="mt-1 flex gap-1 p-2">
      <ProfileImage imageUrl={""} className="h-10 w-10" />
      <div>
        <p className="text-sm font-normal text-[#1C1C1C]">김한주</p>
        <p className="text-sm font-normal text-[#454545]">모달 만들어버리기</p>
      </div>
    </div>
  );
}

export default ReflyCommentItem;
