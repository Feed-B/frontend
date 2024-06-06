import React from "react";
import Button from "@/app/_components/Button/Button";

const ThumbnailSize = "232 X 232 사이즈로 업로드";

function ThumbnailBox() {
  return (
    <>
      <div className="mb-4 mt-4">
        <div className="h-[232px] w-[232px] rounded-xl border-2 border-dashed border-[#D4D4D4] bg-[#F8FAFB]" />
        <p className="mt-3 text-xs font-medium text-[#C4C4C4]">{ThumbnailSize}</p>
      </div>
      <Button buttonSize="small" bgColor="mainBlue">
        <p>업로드</p>
      </Button>
    </>
  );
}

export default ThumbnailBox;
