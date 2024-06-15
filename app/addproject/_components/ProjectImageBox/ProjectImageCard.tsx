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
    <div className="relative h-[220px] w-[220px]">
      <Image
        fill
        className="rounded-xl border border-solid border-gray-300 object-cover hover:cursor-move hover:border-blue-500 hover:shadow-md"
        src={imageUrl}
        alt={`이미지 ${index + 1}`}
      />
      <div
        className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-700"
        onClick={() => handleImageDelete(index)}>
        <Image src={whiteDeleteIcon} width={18} alt="이미지 삭제 버튼" />
      </div>
    </div>
  );
}

export default ProjectImageCard;
