import React, { useRef } from "react";
import Image from "next/image";
import kebabIcon from "@/public/icons/kebab.svg";
import DropDown from "@/app/_components/DropDown/DropDown";
import useToggleHook from "@/app/_hooks/useToggleHook";
import useOutsideClick from "@/app/_hooks/useOutsideClick";

interface Props {
  mode?: "project" | "comment";
  handleEditClick?: () => void;
  projectId: number;
  handleDelete: () => void;
}

function MenuDropBox({ mode = "project", handleEditClick, projectId, handleDelete }: Props) {
  const { isOpen, toggleState } = useToggleHook();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  const handleDeleteMode = (isProject: boolean) => {
    if (isProject) toggleState;
    handleDelete();
  };

  const menuMode = {
    project: {
      editDropDown: <DropDown.LinkItem href={`/project/${projectId}/edit`}>수정</DropDown.LinkItem>,
      handleDeleteClick: () => handleDeleteMode(true),
      iconSize: 24,
    },
    comment: {
      editDropDown: <DropDown.TextItem onClick={handleEditClick}>수정</DropDown.TextItem>,
      handleDeleteClick: () => handleDeleteMode(false),
      iconSize: 20,
    },
  };

  const { editDropDown, handleDeleteClick, iconSize } = menuMode[mode === "project" ? "project" : "comment"];

  return (
    <button className="relative" type="button" onClick={toggleState} ref={buttonRef}>
      <Image
        className="cursor-pointer rounded-lg hover:bg-gray-200"
        src={kebabIcon}
        alt="프로젝트 메뉴."
        width={iconSize}
        priority
      />
      {isOpen && (
        <DropDown className="right-2 mt-2" itemRef={dropdownRef}>
          {editDropDown}
          <DropDown.TextItem onClick={handleDeleteClick}>삭제</DropDown.TextItem>
        </DropDown>
      )}
    </button>
  );
}

export default MenuDropBox;
