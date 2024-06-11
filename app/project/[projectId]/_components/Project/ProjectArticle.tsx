import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrowLeftIcon from "@/public/icons/whiteArrowLeft.svg";
import arrowRightIcon from "@/public/icons/whiteArrowRight.svg";
// import mobileIcon from "@/public/images/mobile1.png";
import pcIcon from "@/public/images/pc1.png";
import phoneIcon from "@/public/icons/phone.svg";
import LinkSection from "../ProjectSection/LinkSection";

interface LinkListProps {
  linkList: {
    id: number;
    tool: string;
    url: string;
  }[];
}

function ProjectArticle({ linkList }: LinkListProps) {
  return (
    <article className="flex justify-between px-8 py-9">
      <div className="flex w-[412px] flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium text-gray-900">안녕하세요! 프로젝트_소개입니다:)</h2>
          <p className="text-overflow-12 text-sm text-gray-600">
            프로젝트 본문 부분입니다! <br />
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
          </p>
          <Link
            href={"https://www.naver.com/"}
            target="_blank"
            className="flex w-fit items-center gap-1 rounded-xl bg-blue-100 p-3 text-sm text-blue-500">
            <Image src={phoneIcon} alt="배포 사이트 바로가기." width={24} priority />
            <p>서비스 보기</p>
          </Link>
        </div>
        <LinkSection linkList={linkList} />
      </div>
      <div className="relative flex">
        <button className="absolute -left-5 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-gray-800 p-[10px]">
          <Image src={arrowLeftIcon} alt="왼쪽 이미지 보기." />
        </button>
        <button className="absolute -right-5 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-gray-800 p-[10px]">
          <Image src={arrowRightIcon} alt="오른쪽 이미지 보기." />
        </button>
        {/* <Image width="200" src={mobileIcon} alt="앱 서비스 프로젝트." />
        <Image width="200" src={mobileIcon} alt="앱 서비스 프로젝트." />
        <Image width="200" src={mobileIcon} alt="앱 서비스 프로젝트." /> */}
        <Image width="600" src={pcIcon} alt="웹 서비스 프로젝트." />
      </div>
    </article>
  );
}

export default ProjectArticle;
