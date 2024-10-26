"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import useToggleHook from "@/app/_hooks/useToggleHook";
import KebabDropDown from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useCommentMutation from "@/app/_hooks/mutations/useCommentMutation";

interface ReflyDropbox {
  reflyId: number;
  toggleState: () => void;
  projectId: number;
}

function ReflyDropbox({ reflyId, toggleState }: ReflyDropbox) {
  const { isOpen, toggleState: dropboxToggle } = useToggleHook();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { deleteReflyCommentMutation } = useCommentMutation({ id: reflyId });

  useOutsideClick(dropdownRef, dropboxToggle, buttonRef);

  const handleDeleteComment = () => {
    deleteReflyCommentMutation.mutate();
    dropboxToggle();
  };

  const handleToggleComponent = () => {
    toggleState();
    dropboxToggle();
  };

  return (
    <>
      <button
        type="button"
        onClick={dropboxToggle}
        className="h-10 w-10 rounded-lg p-2 hover:bg-gray-100"
        ref={buttonRef}>
        <Image src={KebabDropDown} alt="대댓글 모달 메뉴" width={24} />
      </button>

      {isOpen && (
        <DropDown className="right-0 top-10 animate-dropdown-grow" itemRef={dropdownRef}>
          <DropDown.TextItem onClick={handleToggleComponent}>수정</DropDown.TextItem>
          <DropDown.TextItem onClick={handleDeleteComment}>삭제</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default ReflyDropbox;
