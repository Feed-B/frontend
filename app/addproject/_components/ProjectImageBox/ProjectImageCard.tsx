import React from "react";
import Image from "next/image";
import whiteDeleteIcon from "@/public/icons/whiteDelete.svg";

interface ProjectImageCardProps {
  index: number;
  imageUrl: string;
  handleImageDelete: (indexToDelete: number) => void;
}

function ProjectImageCard({ index, imageUrl, handleImageDelete }: ProjectImageCardProps) {
  return (
    <div className="relative rounded-xl border border-solid border-gray-300 bg-white hover:cursor-move hover:border-blue-500 hover:shadow-md active:border-blue-500 mb:h-[72px] mb:w-[72px] tbc:h-[72px] tbc:w-[72px] tbr:h-[124px] tbr:w-[124px] pc:h-[220px] pc:w-[220px]">
      <Image
        fill
        sizes="max-width"
        className="rounded-xl object-contain"
        src={imageUrl}
        alt={`이미지 ${index + 1}`}
        priority
      />
      <div
        className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-700 mb:right-[-20%] mb:top-[-12%] tbc:right-[-20%] tbc:top-[-12%]"
        onClick={() => handleImageDelete(index)}>
        <Image src={whiteDeleteIcon} width={18} alt="이미지 삭제 버튼" />
      </div>
    </div>
  );
}

export default ProjectImageCard;
