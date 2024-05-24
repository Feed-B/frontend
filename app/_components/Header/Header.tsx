import React from "react";
import Image from "next/image";
import Profile from "../Profile/Profile";

function Header() {
  return (
    <header className=" h-20 w-full border-b border-solid border-gray-300 text-white">
      <div className=" m-0 mx-auto flex h-full max-w-[1440px] flex-row items-center justify-between ">
        <div>
          <h1 className="text-black">LOGO</h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button className="text-black">업로드</button>
          <Profile />
          <button className="h-5 w-5">
            <Image src="/icons/headerArrow.svg" alt="open_dropbox" width={20} height={20} priority />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
