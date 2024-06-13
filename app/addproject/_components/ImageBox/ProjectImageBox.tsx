"use client";

import React, { useState } from "react";
import Image from "next/image";
import fileIcon from "@/public/icons/fullFile.svg";
import uploadIcon from "@/public/icons/upload.svg";
import Button from "@/app/_components/Button/Button";

const ImageDescription = "프로젝트를 설명할 이미지를 업로드해주세요";

function ProjectImageBox() {
  const [selectedSize, setSelectedSize] = useState("웹");
  const RadioButton =
    "shadow-default-radio-border checked:shadow-check-radio-border h-3 w-3 appearance-none rounded-full bg-gray-200 checked:border-2 checked:border-white checked:bg-gray-800 hover:cursor-pointer";

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <div className="flex gap-3">
        <label className="flex items-center">
          <input
            type="radio"
            name="size"
            value="웹"
            checked={selectedSize === "웹"}
            onChange={handleSizeChange}
            className={RadioButton}
          />
          <span className="ml-1 text-xs font-medium text-[#4D5256]">웹</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="size"
            value="모바일"
            checked={selectedSize === "모바일"}
            onChange={handleSizeChange}
            className={RadioButton}
          />
          <span className="ml-1 text-xs font-medium text-[#4D5256]">모바일</span>
        </label>
      </div>
      <div className="flex h-[438px] w-auto items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-100">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-3">
            <p className="text-center text-base font-normal text-gray-900">{ImageDescription}</p>
            <Image src={fileIcon} width={64} alt="파일 이미지" />
          </div>
          <Button buttonSize="normal" bgColor="mainBlue" className="flex items-center justify-center gap-1">
            <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
            <p>업로드</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProjectImageBox;
