import React from "react";
import Image from "next/image";
import fileIcon from "@/public/icons/file.svg";

interface ImageSectionProps {
  title: string;
}

const ImageDescription = `프로젝트를 설명할
사진을 업로드해주세요`;

function ImageSection({ title }: ImageSectionProps) {
  return (
    <section>
      <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">{title}</h2>
      {title == "썸네일" && (
        <>
          <div className="mb-4 mt-4">
            <div className="h-[232px] w-[232px] rounded-xl border-2 border-dashed border-[#D4D4D4] bg-[#F8FAFB]" />
            <p className="mt-3 text-xs font-medium text-[#C4C4C4]">232 X 232 사이즈로 업로드</p>
          </div>
          <button
            type="button"
            className="rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
            업로드
          </button>
        </>
      )}
      {title == "이미지" && (
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
                <p className="text-center text-xs font-medium text-[#575757]">1440 X 1024 사이즈로 업로드</p>
                <button
                  type="button"
                  className="rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
                  업로드
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ImageSection;
