"use client";
import React, { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { commentApi } from "@/app/_apis/comment";
import KebabDropDown from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";

interface ReflyDropbox {
  reflyId: number;
  toggleState: () => void;
}

function ReflyDropbox({ reflyId, toggleState }: ReflyDropbox) {
  const queryClient = useQueryClient();

  const { isOpen, toggleState: dropboxToggle } = useToggleHook();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, dropboxToggle, buttonRef);

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await commentApi.deleteReflyComment(reflyId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", "reflyList", "reflyCommentList"],
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });

  const handleDeleteComment = () => {
    mutation.mutate();
    dropboxToggle();
  };

  const handleToggleComponent = () => {
    toggleState();
    dropboxToggle();
  };

  return (
    <>
      <button type="button" onClick={dropboxToggle} className="h-5 w-5" ref={buttonRef}>
        <Image src={KebabDropDown} alt="대댓글 모달 메뉴" width={24} />
      </button>

      {isOpen && (
        <DropDown className="animate-dropdown-grow right-0 top-10" itemRef={dropdownRef}>
          <DropDown.TextItem onClick={handleToggleComponent}>수정</DropDown.TextItem>
          <DropDown.TextItem onClick={handleDeleteComment}>삭제</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default ReflyDropbox;
