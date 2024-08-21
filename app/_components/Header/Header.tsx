"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import uploadIcon from "@/public/icons/blackUpload.svg";
import useModal from "@/app/_hooks/useModal";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import feedbee from "@/public/beeIcons/yellowBee.svg";
import logoTextIcon from "@/public/icons/logoText.svg";
import { getToken } from "@/app/_utils/handleToken";
import { useLogin } from "@/app/_context/LoginProvider";
import LoginButton from "../LoginButton/LoginButton";
import Button from "../Button/Button";
import SignUpModal from "../SignUpModal/SignUpModal";
import HeaderDropDownBox from "./HeaderDropDownBox";
import HeaderSkeleton from "./HeaderSkeleton";

function Header() {
  const { openModal: isSignUpModal, handleModalClose: signUpModalClose, handleModalOpen: signUpModalOpen } = useModal();
  const { token } = useLogin();
  const { isLoggedIn, setIsLoggedIn, type, setType, handleLogout } = useCheckLogin();

  const [loading, setLoading] = useState(true);
  const [buttonActive, setButtonActive] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("edit") || pathname.includes("addproject")) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (type === "signUp") {
      signUpModalOpen();
      setType("");
    }
  }, [type, signUpModalOpen, setType]);

  useEffect(() => {
    const accessToken = getToken();
    if (token || (accessToken && accessToken.accessToken)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  }, [token, setIsLoggedIn]);

  return (
    <header className="sticky right-0 top-0 z-[49] h-16 w-full border-b border-solid border-gray-300 bg-white py-2 text-white mb:fixed mb:px-3 tbc:fixed tbc:px-3 tbr:px-5">
      <div className="relative m-0 mx-auto flex h-11 max-w-[1400px] items-center justify-between">
        <Link href="/main" className="flex items-center gap-2.5">
          <Image src={feedbee} width={33} height={32} alt="로고 아이콘" priority />
          <Image src={logoTextIcon} alt="로고 텍스트" priority />
        </Link>
        <div className="flex h-full items-center gap-4">
          {loading ? (
            <HeaderSkeleton />
          ) : isLoggedIn ? (
            <>
              <Link href="/addproject">
                {buttonActive && (
                  <Button buttonSize="normal" bgColor="yellow" className="flex items-center justify-center gap-1">
                    <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
                    <span>업로드</span>
                  </Button>
                )}
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
