"use client";

import Image from "next/image";
import emptyFileIcon from "@/public/icons/emptyFile.svg";
import { useGetStack } from "@/app/main/_context/StackProvider";

function EmptyCard() {
  const { projectState } = useGetStack();

  return (
    <div className="absolute left-1/2 flex -translate-x-1/2  flex-col items-center justify-center gap-6">
      <Image width={54} height={72} src={emptyFileIcon} alt="파일 없음" />
      <p className="text-xl font-semibold text-gray-700">
        <span className="text-xl font-semibold text-blue-600">`{projectState.searchString}`</span>에 대한 검색결과가
        없어요
      </p>
    </div>
  );
}

export default EmptyCard;
