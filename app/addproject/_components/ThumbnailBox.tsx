"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/app/_components/Button/Button";

function ThumbnailBox() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showImageUrl, setShowImageUrl] = useState<string | null | undefined>("");

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setShowImageUrl(imageUrl);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[232px] w-[232px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-100">
        {showImageUrl ? (
          <div className="group relative h-full w-full">
            <Image fill className="rounded-xl object-cover" src={showImageUrl} alt="썸네일 이미지" />
            <div className="absolute inset-0 bg-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button
                className="border border-solid border-blue-400 text-blue-500"
                buttonSize="normal"
                bgColor="white"
                onClick={handleUploadButtonClick}>
                이미지 수정
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className="border border-solid border-blue-400 text-blue-500"
            buttonSize="normal"
            bgColor="white"
            onClick={handleUploadButtonClick}>
            이미지 업로드
          </Button>
        )}
      </div>
      <input type="file" id="fileInput" ref={fileInputRef} className="hidden" onChange={handleImageChange} />
    </div>
  );
}

export default ThumbnailBox;
