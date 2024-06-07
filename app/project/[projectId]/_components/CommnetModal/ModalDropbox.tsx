import React from "react";
import Image from "next/image";
import useToggleHook from "@/app/_hooks/useToggleHook";
import KebabDropDown from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";

function ModalDropbox() {
  const { isOpen, toggleState } = useToggleHook();
  return (
    <>
      <button type="button" onClick={toggleState} className="h-5 w-5">
        <Image src={KebabDropDown} alt="댓글 모달 메뉴" width={24} />
      </button>

      {isOpen && (
        <DropDown className="right-0 top-[40px]">
          <DropDown.TextItem>수정</DropDown.TextItem>
          <DropDown.TextItem>삭제</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default ModalDropbox;
