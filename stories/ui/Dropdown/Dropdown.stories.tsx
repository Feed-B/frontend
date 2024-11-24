import { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useRef } from "react";
import Image from "next/image";
import Dropdown from "@/app/_components/DropDown/DropDown";
import { DropDownProps } from "@/app/_types/DropDownType";
import DropDown from "@/app/_components/DropDown/DropDown";
import kebabIcon from "@/public/icons/kebab.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import urlCircle from "@/public/icons/urlCircle.svg";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import kakaoImage from "@/public/icons/kakaoCircle.svg";

const LINK_URL = process.env.NEXT_PUBLIC_SERVICE_URL;

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Example = ({ children }: { children: ReactNode }) => {
  const { isOpen, toggleState } = useToggleHook();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  return (
    <button className="relative" type="button" onClick={toggleState} ref={buttonRef}>
      <Image
        className="cursor-pointer rounded-lg hover:bg-gray-200"
        src={kebabIcon}
        alt="프로젝트 메뉴."
        width={24}
        priority
      />
      {isOpen && (
        <DropDown className="right-2 mt-2" itemRef={dropdownRef}>
          {children}
        </DropDown>
      )}
    </button>
  );
};

export const Menu: StoryObj<DropDownProps> = {
  render: () => (
    <Example>
      <DropDown.TextItem>수정</DropDown.TextItem>
      <DropDown.TextItem>삭제</DropDown.TextItem>
    </Example>
  ),
};

export const Header: StoryObj<DropDownProps> = {
  render: () => (
    <Example>
      <DropDown.LinkItem href={`${LINK_URL}`}>마이페이지</DropDown.LinkItem>
      <DropDown.HR />
      <DropDown.TextItem>로그아웃</DropDown.TextItem>
    </Example>
  ),
};

export const Social: StoryObj<DropDownProps> = {
  render: () => (
    <Example>
      <div className="flex">
        <DropDown.SocialItem>
          <Image className="cursor-pointer" src={kakaoImage} alt="카톡 공유하기." width={44} />
          <p>카카오톡</p>
        </DropDown.SocialItem>
        <DropDown.SocialItem>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 p-[10px]">
            <Image className="cursor-pointer" src={urlCircle} alt="URL 복사하기." width={24} />
          </div>
          <p>URL 복사</p>
        </DropDown.SocialItem>
      </div>
    </Example>
  ),
};
