import React from "react";
import Image from "next/image";
import fileIcon from "@/public/icons/fullFile.svg";
import uploadIcon from "@/public/icons/upload.svg";
import Button from "@/app/_components/Button/Button";

const ImageDescription = "프로젝트를 설명할 이미지를 업로드해주세요";

function ProjectImageBox() {
  return (
    <>
      <div className="flex gap-3">
        <label>
          <input type="radio" name="size" value="웹" />웹
        </label>
        <label>
          <input type="radio" name="size" value="모바일" />
          모바일
        </label>
      </div>
      <div className="flex w-[1094px] justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 px-52 py-28">
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
