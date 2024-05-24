import React from "react";

import Profile from "../Profile/Profile";
import DropDownBox from "./DropDownBox";

function Header() {
  return (
    <header className="  h-20 w-full border-b border-solid border-gray-300 text-white">
      <div className="relative m-0 mx-auto flex h-full max-w-[1440px] flex-row items-center justify-between ">
        <div>
          <h1 className="text-black">LOGO</h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button className="text-black">업로드</button>
          <Profile />
          <DropDownBox />
        </div>
      </div>
    </header>
  );
}

export default Header;
