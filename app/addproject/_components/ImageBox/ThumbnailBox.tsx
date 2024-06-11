import React from "react";
import Button from "@/app/_components/Button/Button";

function ThumbnailBox() {
  return (
    <div className="flex h-[232px] w-[232px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-100">
      <Button className="text-blue-500" buttonSize="normal" bgColor="white">
        <p className="text-sm font-normal">이미지 업로드</p>
      </Button>
    </div>
  );
}

export default ThumbnailBox;
