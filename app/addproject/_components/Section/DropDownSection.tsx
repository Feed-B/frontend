"use client";

import React, { useState } from "react";
import Image from "next/image";
import deleteIcon from "@/public/icons/delete.svg";
import notDeleteIcon from "@/public/icons/notDelete.svg";
import DropDown from "../DropDown/DropDown";

interface DropDownSectionProps {
  title: string;
  inputType: string;
  placeholder: string;
  inputName?: string;
  inputWidth?: string;
  dropDownType: string;
}

interface InputBox {
  id: number;
  value: string;
}

function DropDownSection({ title, inputType, placeholder, inputName, inputWidth, dropDownType }: DropDownSectionProps) {
  const [additionalInput, setAdditionalInput] = useState<InputBox[]>([{ id: 0, value: "" }]);
  const [nextId, setNextId] = useState(1);

  const handleAddButtonClick = () => {
    setAdditionalInput([...additionalInput, { id: nextId, value: "" }]);
    setNextId(nextId + 1);
  };

  const handleDeleteButtonClick = (id: number) => {
    if (additionalInput.length > 1) {
      setAdditionalInput(additionalInput.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">{title}</h2>
      {additionalInput.map(item => (
        <div key={item.id} className="mb-2 flex gap-1">
          <div className="relative flex h-12 w-28 items-center gap-2 border border-solid border-[#EBEBEB] p-2">
            <DropDown dataType={dropDownType} />
          </div>
          <input
            type={inputType}
            placeholder={placeholder}
            className={`${inputWidth} h-12 rounded-sm border border-solid border-[#EBEBEB] px-4 py-3`}
            name={inputName}
          />
          <div
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border border-solid border-[#EBEBEB] p-2"
            onClick={() => handleDeleteButtonClick(item.id)}>
            <Image width={20} src={additionalInput.length > 1 ? deleteIcon : notDeleteIcon} alt="삭제 버튼" />
          </div>
        </div>
      ))}
      <button
        onClick={handleAddButtonClick}
        className="mt-4 rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
        추가하기
      </button>
    </>
  );
}

export default DropDownSection;
