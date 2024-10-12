"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useToggleHook from "@/app/_hooks/useToggleHook";
import KebabDropDown from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";
import useCommentMutation from "@/app/_hooks/mutations/useCommentMutation";

interface CommentDropboxProps {
  toggleState: () => void;
  ratingId: number;
  projectId: number;
}

function CommentDropbox({ toggleState: editToggle, ratingId, projectId }: CommentDropboxProps) {
  const router = useRouter();

  const { isOpen, toggleState } = useToggleHook();
  const { deleteCommentMutation } = useCommentMutation({ id: projectId, ratingId });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  const handleDeleteComment = () => {
    revalidateTagAction("commentDetail");
    revalidateTagAction("commentList");
    revalidateTagAction("myComment");
    deleteCommentMutation.mutate();
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
