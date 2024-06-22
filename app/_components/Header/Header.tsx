"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import uploadIcon from "@/public/icons/upload.svg";
import useModal from "@/app/_hooks/useModal";
import { useKakaoStore } from "@/app/_utils/zustandStore";
import { getToken, removeToken } from "@/app/_utils/handleToken";
import feedbee from "@/public/icons/feedbee.svg";
import logoTextIcon from "@/public/icons/logoText.svg";
import LoginButton from "../LoginButton/LoginButton";
import Button from "../Button/Button";
import SignUpModal from "../SignUpModal/SignUpModal";
import HeaderDropDownBox from "./HeaderDropDownBox";

function Header() {
  const { openModal: isSignUpModal, handleModalClose: signUpModalClose, handleModalOpen: signUpModalOpen } = useModal();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { type, setType } = useKakaoStore();

  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = getToken();
    if (token && token.accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (type === "signUp") {
      signUpModalOpen();
      setType("");
    }
  }, [type, signUpModalOpen, setType]);

  return (
    <header className="h-16 w-full border-b border-solid border-gray-300 py-2 text-white">
      <div className="relative m-0 mx-auto flex h-11 max-w-[1400px] items-center justify-between">
        <Link href="/main" className="flex items-center gap-2.5">
          <Image src={feedbee} width={33} height={32} alt="로고 아이콘" />
          <Image src={logoTextIcon} alt="로고 텍스트" />
        </Link>
        <div className="flex h-full items-center gap-4">
          {isAuthenticated ? (
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
