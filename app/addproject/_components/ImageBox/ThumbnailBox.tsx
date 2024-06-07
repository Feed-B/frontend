import React from "react";
import Button from "@/app/_components/Button/Button";

const ThumbnailSize = "프로젝트를 한 눈에 표현할 수 있는 이미지를 골라주세요 (232 x 232 px)";

function ThumbnailBox() {
  return (
    <>
      <p className="text-sm font-normal text-gray-500">{ThumbnailSize}</p>
      <div className="mb-4 mt-4">
        <div className="h-[232px] w-[232px] rounded-xl border-2 border-dashed border-gray-200 bg-gray-100" />
      </div>
      <Button buttonSize="small" bgColor="mainBlue">
        <p>업로드</p>
      </Button>
    </>
  );
}

export default ThumbnailBox;
