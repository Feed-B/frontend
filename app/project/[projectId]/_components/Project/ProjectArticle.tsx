import React from "react";
import Image from "next/image";
import Link from "next/link";
import shortcutIcon from "@/public/icons/doubleArrowRight.svg";
import mobileIcon from "@/public/images/mobile1.png";
// import pcIcon from "@/public/images/pc1.png";
import Button from "@/app/_components/Button/Button";
import DirectionButton from "@/app/_components/Button/DirectionButton";
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
    <article className="flex justify-between gap-24 px-8 py-7">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium text-gray-900">안녕하세요! 프로젝트_소개입니다:)</h2>
          <p className="text-overflow-12 text-sm text-gray-600">
            프로젝트 본문 부분입니다! <br />
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
          </p>
          <Link href="https://www.naver.com/" target="_blank">
            <Button bgColor="yellow" className="flex items-center gap-1 p-3" buttonSize={"small"}>
              <p>서비스 바로가기</p>
              <Image src={shortcutIcon} alt="배포 사이트 바로가기." width={12} priority />
            </Button>
          </Link>
        </div>
        <LinkSection linkList={linkList} />
      </div>
      <div className="relative flex">
        <DirectionButton direction="left" className="absolute -left-5 top-1/2 z-10 -translate-y-1/2" />
        <DirectionButton direction="right" className="absolute -right-5 top-1/2 z-10 -translate-y-1/2" />
        <div className="relative h-[406px] w-[188px] border border-solid border-gray-300">
          <Image src={mobileIcon} alt="앱 서비스 프로젝트." fill sizes="max-width" />
        </div>
        {/* <div className="relative h-[406px] w-[572px] border border-solid border-gray-300">
          <Image src={pcIcon} alt="웹 서비스 프로젝트." fill sizes="max-width" />
        </div> */}
      </div>
    </article>
  );
}

export default ProjectArticle;
