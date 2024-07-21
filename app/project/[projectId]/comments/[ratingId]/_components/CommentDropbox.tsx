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
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";

interface CommentDropboxProps {
  toggleState: () => void;
  ratingId: number;
  projectId: number;
}

function CommentDropbox({ toggleState: editToggle, ratingId, projectId }: CommentDropboxProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { addToast } = useToast();
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
        queryKey: commentQueryKeys.detail(ratingId).queryKey,
      });

      addToast("프로젝트 리뷰가 삭제되었습니다", "error");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 삭제 오류가 발생했습니다", "error");
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
      <button
        type="button"
        onClick={toggleState}
        className="h-10 w-10 rounded-lg p-2 hover:bg-gray-100"
        ref={buttonRef}>
        <Image src={KebabDropDown} alt="댓글 모달 메뉴" width={24} />
      </button>

      {isOpen && (
        <DropDown className="right-0 top-11 animate-dropdown-grow" itemRef={dropdownRef}>
          <DropDown.TextItem onClick={handleEditComment}>수정</DropDown.TextItem>
          <DropDown.TextItem onClick={handleDeleteComment}>삭제</DropDown.TextItem>
        </DropDown>
      )}
    </>
  );
}

export default CommentDropbox;
