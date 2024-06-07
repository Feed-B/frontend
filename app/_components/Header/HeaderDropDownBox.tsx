"use client";

import Image from "next/image";
import React from "react";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import SmallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import DropDown from "../DropDown/DropDown";
import ProfileImage from "../ProfileImage/ProfileImage";

function HeaderDropDownBox() {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <>
      <div className="relative flex cursor-pointer items-center gap-2" onClick={toggleState}>
        <ProfileImage imageUrl={""} className="h-9 w-9" />
        <button type="button" className="h-5 w-5">
          {isOpen ? (
            <Image src={SmallTopArrowIcon} alt="open_dropbox" width={20} height={20} priority />
          ) : (
            <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
          )}
        </button>
      </div>
      {isOpen && (
        <DropDown className="right-0 top-[65px] w-40">
          <DropDown.LinkItem href="/mypage">마이페이지</DropDown.LinkItem>
          <DropDown.HR />
          <DropDown.TextItem>로그아웃</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default HeaderDropDownBox;
