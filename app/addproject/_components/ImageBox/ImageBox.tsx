import React from "react";
import Image from "next/image";
import fileIcon from "@/public/icons/file.svg";

const ImageDescription = `프로젝트를 설명할
사진을 업로드해주세요`;
const ImageSize = "1440 X 1024 사이즈로 업로드";

function ImageBox() {
  return (
    <>
      {/* 이미지 부분은 승훈님이 제작하신 input 컴포넌트 사용 예정 */}
      <div className="flex gap-3">
        <label>
          <input type="radio" name="size" value="웹" />웹
        </label>
        <label>
          <input type="radio" name="size" value="모바일" />
          모바일
        </label>
      </div>
      <div className="mb-4 mt-4">
        <div className="flex w-[1094px] justify-center rounded-lg border-2 border-dashed border-[#D4D4D4] bg-[#F8FAFB] px-[460px] py-28">
          <div className="flex flex-col items-center gap-3">
            <pre className="text-center text-base font-medium text-[#1C1C1C]">{ImageDescription}</pre>
            <Image src={fileIcon} width={54} alt="파일 이미지" />
            <p className="text-center text-xs font-medium text-[#575757]">{ImageSize}</p>
            <button
              type="button"
              className="rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
              업로드
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageBox;