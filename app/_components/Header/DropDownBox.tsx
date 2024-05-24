"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function DropDownBox() {
  const [DropDownBoxState, setDropDownBoxState] = useState<boolean>(false);

  const isDropDownBoxOpen = () => {
    setDropDownBoxState(prev => !prev);
  };

  return (
    <>
      <button className="h-5 w-5" onClick={isDropDownBoxOpen}>
        {DropDownBoxState ? (
          <>
            <Image src="/icons/headerArrow.svg" alt="open_dropbox" width={20} height={20} priority />
          </> //위로향한 화살표 이지미로 바꿔야함
        ) : (
          <>
            <Image src="/icons/headerArrow.svg" alt="open_dropbox" width={20} height={20} priority />
          </>
        )}
      </button>
      {DropDownBoxState && (
        <div className="absolute right-0 top-24 w-40 rounded-lg border border-solid border-gray-300 py-4 text-black">
          <Link className="block cursor-pointer px-4 py-2" href="/mypage">
            마이페이지
          </Link>
          <Link className="block cursor-pointer px-4 py-2" href={"/"}>
            프로필 정보 수정
          </Link>
          <Link className="block cursor-pointer px-4 py-2" href={"/"}>
            로그아웃
          </Link>
        </div>
      )}
    </>
  );
}

export default DropDownBox;
