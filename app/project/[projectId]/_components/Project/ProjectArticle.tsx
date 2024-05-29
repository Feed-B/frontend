import React from "react";
import Image from "next/image";
import mobileIcon from "@/public/images/mobile.png";
// import pcIcon from "@/public/images/pc.png";

function ProjectArticle() {
  return (
    <article className="flex items-center gap-16 px-8 py-3">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-[#4D5256]">프로젝트_제목</p>
        <div className="flex flex-col gap-2 text-sm text-[#4D5256]">
          <p>안녕하세요! 프로젝트_소개입니다:)</p>
          <p>
            프로젝트 본문 부분입니다! <br />
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
            프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다! 프로젝트 본문 부분입니다!
          </p>
        </div>
        {/* 임시 버튼 (공용 컴포넌트로 대체 예정) */}
        <button className="w-fit rounded bg-[#EBECFF] p-3">확인하러 가기</button>
      </div>
      <div>
        <Image width="700" src={mobileIcon} alt="앱 서비스 프로젝트." />
        {/* <Image width="3000" src={pcIcon} alt="웹 서비스 프로젝트." /> */}
      </div>
    </article>
  );
}

export default ProjectArticle;
