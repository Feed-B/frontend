"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import SmallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import { profileAPI } from "@/app/_apis/ProfileAPI";
import DropDown from "../DropDown/DropDown";
import ProfileImage from "../ProfileImage/ProfileImage";

interface HeaderDropDownBoxProps {
  handleLogout: () => void;
}

function HeaderDropDownBox({ handleLogout }: HeaderDropDownBoxProps) {
  const { isOpen, toggleState } = useToggleHook();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  const { data: userId } = useQuery(userQueryKeys.userId());

  const { data: userdata } = useQuery({
    queryKey: ["profile", userId?.id],
    queryFn: () => profileAPI.getUserData(Number(userId?.id)),
    enabled: !!userId,
  });

  return (
    <>
      <div className="relative flex cursor-pointer items-center gap-2" onClick={toggleState}>
        <ProfileImage imageUrl={userdata?.imageUrl || "default"} className="h-9 w-9" />
        <button type="button" className="h-5 w-5" ref={buttonRef}>
          {isOpen ? (
            <Image src={SmallTopArrowIcon} alt="유저 옵션." width={20} height={20} priority />
          ) : (
            <Image src={SmallArrowIcon} alt="유저 옵션." width={20} height={20} priority />
          )}
        </button>
      </div>
      {isOpen && (
        <DropDown className="right-0 top-[65px] w-40" itemRef={dropdownRef}>
          <DropDown.LinkItem href={`/profile/${userId?.id}`}>마이페이지</DropDown.LinkItem>
          <DropDown.HR />
          <DropDown.TextItem onClick={handleLogout}>로그아웃</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default HeaderDropDownBox;
