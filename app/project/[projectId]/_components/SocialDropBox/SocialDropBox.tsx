"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useToast } from "@/app/_context/ToastContext";
import useToggleHook from "@/app/_hooks/useToggleHook";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import shareIcon from "@/public/icons/share.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import urlCircle from "@/public/icons/urlCircle.svg";
import kakaoImage from "@/public/icons/kakaoCircle.svg";

function SocialDropBox() {
  const { addToast } = useToast();
  const { isOpen, toggleState } = useToggleHook();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  const handleCopyLink = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    toggleState();
    addToast("링크가 복사되었습니다.", "success");
  };

  return (
    <>
      <button type="button" onClick={toggleState} className="h-5 w-5" ref={buttonRef}>
        <Image className="cursor-pointer" src={shareIcon} alt="공유하기." width={24} />
      </button>

      {isOpen && (
        <DropDown className="right-8 top-10 flex animate-dropdown-grow" itemRef={dropdownRef}>
          <DropDown.SocialItem>
            <Image className="cursor-pointer" src={kakaoImage} alt="카톡공유." width={44} />
            <p>카카오톡</p>
          </DropDown.SocialItem>
          <DropDown.SocialItem onClick={handleCopyLink}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 p-[10px]">
              <Image className="cursor-pointer" src={urlCircle} alt="URL복사." width={24} />
            </div>
            <p>URL 복사</p>
          </DropDown.SocialItem>
        </DropDown>
      )}
    </>
  );
}

export default SocialDropBox;
