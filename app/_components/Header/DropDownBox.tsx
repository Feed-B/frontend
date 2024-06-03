"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import Profile from "../Profile/Profile";

function DropDownBox() {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <div className="flex cursor-pointer items-center gap-2" onClick={toggleState}>
      <Profile />
      <button className="h-5 w-5">
        {isOpen ? (
          <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
        ) : (
          //위로향한 화살표 이지미로 바꿔야함
          <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
        )}
      </button>
      {isOpen && (
        <div className="text-black absolute right-0 top-[65px] w-40 rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm">
          <Link className="block cursor-pointer p-2" href="/mypage">
            마이페이지
          </Link>
          <Link className="block cursor-pointer border-b border-solid border-gray-300  p-2" href={"/"}>
            프로필 정보 수정
          </Link>
          <Link className="block cursor-pointer p-2" href={"/"}>
            로그아웃
          </Link>
        </div>
      )}
    </div>
  );
}

export default DropDownBox;
