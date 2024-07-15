"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useToggleHook from "@/app/_hooks/useToggleHook";
import KebabDropDown from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import { commentApi } from "@/app/_apis/comment";

interface ModalDropboxProps {
  toggleState: () => void;
  ratingId: number;
  projectId: number;
}

function ModalDropbox({ toggleState: editToggle, ratingId, projectId }: ModalDropboxProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { isOpen, toggleState } = useToggleHook();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.deleteComment(ratingId);
    },
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["comment", "detail", "commentData", ratingId],
      });
    },
  });

  const handleDeleteComment = () => {
    mutation.mutate();
    router.push(`/project/${projectId}`);
    toggleState();
  };

  const handleEditComment = () => {
    editToggle();
    toggleState();
  };

  return (
    <>
      <button type="button" onClick={toggleState} className="h-5 w-5" ref={buttonRef}>
        <Image src={KebabDropDown} alt="댓글 모달 메뉴" width={24} />
      </button>

      {isOpen && (
        <DropDown className="animate-dropdown-grow right-0 top-10" itemRef={dropdownRef}>
          <DropDown.TextItem onClick={handleEditComment}>수정</DropDown.TextItem>
          <DropDown.TextItem onClick={handleDeleteComment}>삭제</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default ModalDropbox;
