"use client";

import Image from "next/image";
import React, { useRef } from "react";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import SmallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import { useCurrentUser, useProfileInfo } from "@/app/_hooks/reactQuery/useUserQuery";
import ProfileImage from "../Profile/ProfileImage";
import DropDown from "../DropDown/DropDown";

interface HeaderDropDownBoxProps {
  handleLogout: () => void;
}

function HeaderDropDownBox({ handleLogout }: HeaderDropDownBoxProps) {
  const { isOpen, toggleState } = useToggleHook();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, toggleState, divRef);

  const { data: userId } = useCurrentUser();
  const { data: userdata } = useProfileInfo(Number(userId?.id));

  return (
    <>
      <div className="relative flex cursor-pointer items-center gap-2" onClick={toggleState} ref={divRef}>
        <ProfileImage imageUrl={userdata?.imageUrl || "default"} className="h-9 w-9" />
        <button type="button" className="h-5 w-5">
          {isOpen ? (
            <Image src={SmallTopArrowIcon} alt="유저 옵션." width={20} height={20} priority />
          ) : (
            <Image src={SmallArrowIcon} alt="유저 옵션." width={20} height={20} priority />
          )}
        </button>
      </div>
      {isOpen && (
        <DropDown className="right-0 top-[65px] w-40" itemRef={dropdownRef}>
          <DropDown.LinkItem href={`/profile/${userId?.id}`} onClick={toggleState}>
            마이페이지
          </DropDown.LinkItem>
          <DropDown.HR />
          <DropDown.TextItem onClick={handleLogout}>로그아웃</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default HeaderDropDownBox;
