"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import fullFileIcon from "@/public/icons/fullFile.svg";
import uploadIcon from "@/public/icons/upload.svg";
import Button from "@/app/_components/Button/Button";
import whitePlusIcon from "@/public/icons/whitePlus.svg";
import whiteDeleteIcon from "@/public/icons/whiteDelete.svg";
import RadioButton from "../RadioButton";

const ImageDescription = "프로젝트를 설명할 이미지를 업로드해주세요";

function ProjectImageBox() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedSize, setSelectedSize] = useState("웹");
  const [showImageUrls, setShowImageUrls] = useState<string[]>([]);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const imageUrlList = Array.from(files).map(file => URL.createObjectURL(file));
      setShowImageUrls(prevImages => {
        const newImages = [...prevImages, ...imageUrlList];
        return newImages.slice(0, 5); // 이미지는 최대 5개까지만 허용
      });
    }
  };

  const handleBackgroundDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageDelete = (indexToDelete: number) => {
    setShowImageUrls(prevImages => prevImages.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="flex gap-3">
        <RadioButton value="웹" checked={selectedSize === "웹"} onChange={handleSizeChange} text="웹" />
        <RadioButton value="모바일" checked={selectedSize === "모바일"} onChange={handleSizeChange} text="모바일" />
      </div>
      <div
        className={`flex h-[252px] ${showImageUrls.length > 0 ? "w-full" : "w-[690px]"} items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-4`}>
        {showImageUrls.length > 0 ? (
          <div className="flex h-full w-full flex-row items-start gap-4">
            {showImageUrls.map((url, index) => (
              <div key={index} className="relative h-[220px] w-[220px]">
                <Image
                  fill
                  className="rounded-xl border border-solid border-gray-300 object-cover hover:cursor-move hover:border-blue-500 hover:shadow-md"
                  src={url}
                  alt={`이미지 ${index + 1}`}
                />
                <div
                  className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-700"
                  onClick={() => handleImageDelete(index)}>
                  <Image src={whiteDeleteIcon} width={18} alt="이미지 삭제 버튼" />
                </div>
              </div>
            ))}
            {showImageUrls.length < 5 && (
              <div className="flex h-[220px] w-[220px] items-center justify-center rounded-xl border border-solid border-blue-500 bg-blue-100">
                <div
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-500"
                  onClick={handleBackgroundDivClick}>
                  <Image src={whitePlusIcon} width={18} alt="이미지 추가 버튼" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-3">
              <p className="text-center text-base font-normal text-gray-900">{ImageDescription}</p>
              <Image src={fullFileIcon} width={64} alt="파일 이미지" />
            </div>
            <Button
              buttonSize="normal"
              bgColor="mainBlue"
              className="flex items-center justify-center gap-1"
              onClick={handleBackgroundDivClick}>
              <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
              <p>업로드</p>
            </Button>
          </div>
        )}
      </div>
      <input type="file" id="fileInput" ref={fileInputRef} className="hidden" multiple onChange={handleImageChange} />
    </>
  );
}

export default ProjectImageBox;
