import React from "react";
import Button from "@/app/_components/Button/Button";

const ThumbnailSize = "(232 x 232px)";

interface ThumbnailBoxProps {
  title: string;
}

function ThumbnailBox({ title }: ThumbnailBoxProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex w-[232px] items-center justify-between">
        <h2 className="text-base font-bold text-gray-900">{title} *</h2>
        <span className="text-sm font-normal text-gray-500">{ThumbnailSize}</span>
      </div>
      <div className="flex h-[232px] w-[232px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-100">
        <Button buttonSize="small" bgColor="white">
          <p className="text-sm font-normal">이미지 업로드</p>
        </Button>
      </div>
    </section>
  );
}

export default ThumbnailBox;
