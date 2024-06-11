import React from "react";
import Image from "next/image";
import Link from "next/link";
import uploadIcon from "@/public/icons/upload.svg";
import Button from "../Button/Button";
import HeaderDropDownBox from "./HeaderDropDownBox";

function Header() {
  return (
    <header className="h-16 w-full border-b border-solid border-gray-300 py-2 text-white">
      <div className="relative m-0 mx-auto flex h-11 max-w-[1400px] items-center justify-between">
        <Link href="/main">
          <h1 className="h-full text-black">LOGO</h1>
        </Link>
        <div className="flex h-full items-center gap-4">
          <Link href="/addproject">
            <Button buttonSize="small" bgColor="mainBlue" className="flex items-center justify-center gap-1">
              <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
              <span>업로드</span>
            </Button>
          </Link>
          <HeaderDropDownBox />
        </div>
      </div>
    </header>
  );
}

export default Header;
