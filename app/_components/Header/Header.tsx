"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import uploadIcon from "@/public/icons/blackUpload.svg";
import useModal from "@/app/_hooks/useModal";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import feedbee from "@/public/icons/feedbee.svg";
import logoTextIcon from "@/public/icons/logoText.svg";
import { getToken } from "@/app/_utils/handleToken";
import LoginButton from "../LoginButton/LoginButton";
import Button from "../Button/Button";
import SignUpModal from "../SignUpModal/SignUpModal";
import HeaderDropDownBox from "./HeaderDropDownBox";

function Header() {
  const { openModal: isSignUpModal, handleModalClose: signUpModalClose, handleModalOpen: signUpModalOpen } = useModal();

  const { type, setType, isLoggedIn, handleLogout, setIsLoggedIn } = useCheckLogin();

  useEffect(() => {
    if (type === "signUp") {
      signUpModalOpen();
      setType("");
    }
  }, [type, signUpModalOpen, setType]);

  useEffect(() => {
    const token = getToken();
    if (token && token.accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false); // 로그인 상태 없을 때 업데이트
    }
  }, [setIsLoggedIn]);

  return (
    <header className="sticky right-0 top-0 z-[49] h-16 w-full border-b border-solid border-gray-300 bg-white py-2 text-white">
      <div className="relative m-0 mx-auto flex h-11 max-w-[1400px] items-center justify-between">
        <Link href="/main" className="flex items-center gap-2.5">
          <Image src={feedbee} width={33} height={32} alt="로고 아이콘" priority />
          <Image src={logoTextIcon} alt="로고 텍스트" priority />
        </Link>
        <div className="flex h-full items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/addproject">
                <Button buttonSize="normal" bgColor="yellow" className="flex items-center justify-center gap-1">
                  <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
                  <span>업로드</span>
                </Button>
              </Link>
              <HeaderDropDownBox handleLogout={handleLogout} />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
      <SignUpModal openModal={isSignUpModal} handleModalClose={signUpModalClose} dataType="job" />
    </header>
  );
}

export default Header;
