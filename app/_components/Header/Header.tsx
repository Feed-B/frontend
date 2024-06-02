import React from "react";
import Image from "next/image";
import Link from "next/link";
import uploadIcon from "@/public/icons/upload.svg";
import Profile from "../Profile/Profile";
import DropDownBox from "./DropDownBox";

function Header() {
  return (
    <header className="h-16 w-full border-b border-solid border-gray-300 py-2 text-white">
      <div className="relative m-0 mx-auto flex h-11 max-w-[1400px] items-center justify-between">
        <div>
          <h1 className="h-full text-black">LOGO</h1>
        </div>
        <div className="flex h-full items-center gap-4">
          <Link
            href="/"
            className="flex h-full w-[124px] items-center justify-center gap-1 rounded-lg bg-[#3C67E7] text-white">
            <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
            <span>업로드</span>
          </Link>
          <Profile />
          <DropDownBox />
        </div>
      </div>
    </header>
  );
}

export default Header;
