"use client";

import Image from "next/image";
import React from "react";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import SmallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import Profile from "../Profile/Profile";
import DropDown from "../DropDown/DropDown";

function HeaderDropDownBox() {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <DropDown className="flex cursor-pointer items-center gap-2" onClick={toggleState}>
      <Profile />
      <DropDown.ToggleButton className="h-5 w-5">
        {isOpen ? (
          <Image src={SmallTopArrowIcon} alt="open_dropbox" width={20} height={20} priority />
        ) : (
          //위로향한 화살표 이지미로 바꿔야함
          <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
        )}
      </DropDown.ToggleButton>
      {isOpen && (
        <DropDown.List className="text-black absolute right-0 top-[65px] w-40 rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm">
          <DropDown.LinkItem className="block cursor-pointer p-2" href="/mypage">
            마이페이지
          </DropDown.LinkItem>
          <DropDown.LinkItem className="block cursor-pointer p-2" href={"/"}>
            프로필 정보 수정
          </DropDown.LinkItem>
          <DropDown.HR className="border border-solid border-gray-300" />
          <DropDown.LinkItem className="block cursor-pointer p-2" href={"/"}>
            로그아웃
          </DropDown.LinkItem>
        </DropDown.List>
      )}
    </DropDown>
  );
}

export default HeaderDropDownBox;
