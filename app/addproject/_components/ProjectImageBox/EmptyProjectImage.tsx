import Image from "next/image";
import React from "react";
import fullFileIcon from "@/public/icons/fullFile.svg";
import Button from "@/app/_components/Button/Button";
import uploadIcon from "@/public/icons/blackUpload.svg";

const IMAGE_DESCRIPTION = "프로젝트를 설명할 이미지를 업로드해주세요";
const IMAGE_SUB_DESCRIPTION = "최대 5장으로 구성해주세요";

interface EmptyProjectImageProps {
  onButtonClick: () => void;
}

function EmptyProjectImage({ onButtonClick }: EmptyProjectImageProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-3">
        <div className="text-center">
          <p className="text-base font-medium text-gray-900">{IMAGE_DESCRIPTION}</p>
          <p className="text-sm font-normal text-gray-700">{IMAGE_SUB_DESCRIPTION}</p>
        </div>
        <Image src={fullFileIcon} width={64} alt="파일 이미지" />
      </div>
      <Button
        buttonSize="normal"
        bgColor="yellow"
        className="flex items-center justify-center gap-1"
        onClick={onButtonClick}>
        <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
        <p>업로드</p>
      </Button>
    </div>
  );
}

export default EmptyProjectImage;
