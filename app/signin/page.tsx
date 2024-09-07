"use client";

import React from "react";
import Image from "next/image";
import naverIcon from "@/public/icons/naver.svg";
import kakaoIcon from "@/public/icons/kakao.png";
import feedbee from "@/public/beeIcons/yellowBee.svg";
import logoTextIcon from "@/public/icons/logoText.svg";
import Button from "../_components/Button/Button";

function SigninPage() {
  const NAVER_OAUTH_URL = process.env.NEXT_PUBLIC_NAVER_OAUTH_URL || "default-url";
  const KAKAO_OAUTH_URL = process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL || "default-url";

  const handleNaverLogin = () => {
    window.location.href = NAVER_OAUTH_URL;
  };

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_OAUTH_URL;
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mt-[200px]">
        <Image src={logoTextIcon} width={180} className="mb-6" alt="로고 텍스트" />
      </div>
      <Image src={feedbee} width={180} height={175} className="mb-[41px]" alt="피드비" priority />
      <Button
        buttonSize="normal"
        bgColor="naver"
        onClick={handleNaverLogin}
        className="mb-2 flex h-[52px] w-96 items-center justify-center gap-3 text-lg font-medium mb:w-[335px]">
        <Image src={naverIcon} alt="네이버 아이콘" width={20} height={20} priority />
        네이버 로그인
      </Button>

      <Button
        buttonSize="normal"
        bgColor="kakao"
        onClick={handleKakaoLogin}
        className="flex h-[52px] w-96 items-center justify-center gap-3 bg-[#FEE500] text-lg font-medium mb:w-[335px]">
        <Image src={kakaoIcon} alt="카카오 아이콘" width={20} height={20} priority />
        카카오 로그인
      </Button>
    </main>
  );
}

export default SigninPage;
