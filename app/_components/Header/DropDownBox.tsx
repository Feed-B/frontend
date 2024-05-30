"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";

function DropDownBox() {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <>
      <button className="h-5 w-5" onClick={toggleState}>
        {isOpen ? (
          <>
            <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
          </> //위로향한 화살표 이지미로 바꿔야함
        ) : (
          <>
            <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-[65px] w-40 rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm text-black">
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
    </>
  );
}

export default DropDownBox;
