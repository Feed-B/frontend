import React from "react";
import Image from "next/image";
import Link from "next/link";
import mobileIcon from "@/public/images/mobile.png";
// import pcIcon from "@/public/images/pc.png";
import webIcon from "@/public/icons/web.svg";
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
    <article className="flex items-center gap-16 px-8 py-3">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-gray-900">프로젝트_제목</h2>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gray-900">안녕하세요! 프로젝트_소개입니다:)</p>
          <p className="text-gray-600">
            프로젝트 본문 부분입니다! <br />
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
          </p>
        </div>
        <Link
          href={"https://www.naver.com/"}
          target="_blank"
          className="flex w-fit items-center gap-1 rounded-xl bg-blue-100 p-3 text-sm text-blue-500">
          <Image src={webIcon} alt="배포 사이트 바로가기." width={24} priority />
          <p>확인하러 가기</p>
        </Link>
        <LinkSection linkList={linkList} />
      </div>
      <div>
        <Image width="700" src={mobileIcon} alt="앱 서비스 프로젝트." />
        {/* <Image width="3000" src={pcIcon} alt="웹 서비스 프로젝트." /> */}
      </div>
    </article>
  );
}

export default ProjectArticle;
