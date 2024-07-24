"use client";
import React, { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { commentApi } from "@/app/_apis/comment";
import KebabDropDown from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { revalidatePathAction } from "@/app/_utils/revalidationAction";

interface ReflyDropbox {
  reflyId: number;
  toggleState: () => void;
  projectId: number;
}

function ReflyDropbox({ reflyId, toggleState, projectId }: ReflyDropbox) {
  const queryClient = useQueryClient();

  const { addToast } = useToast();
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
        queryKey: commentQueryKeys.reflyList({ ratingId: reflyId }).queryKey,
      });
      addToast("댓글이 삭제되었습니다", "error");
      revalidatePathAction(`project/${projectId}/comments/${reflyId}`);
    },
    onError: error => {
      console.error("Error:", error);
      addToast("댓글이 삭제 오류가 발생했습니다", "error");
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
