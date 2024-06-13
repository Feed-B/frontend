"use client";

import React, { InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import deleteIcon from "@/public/icons/delete.svg";
import notDeleteIcon from "@/public/icons/notDelete.svg";
import DropDownBox from "./DropDownBox";

interface DropDownSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  dropDownType: string;
  dropDownWidth?: string;
}

interface InputBox {
  id: number;
  value: string;
}

function DropDownSection({
  title,
  type,
  placeholder,
  name,
  inputWidth,
  dropDownType,
  dropDownWidth,
}: DropDownSectionProps) {
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
    <section className="flex flex-col gap-4">
      <label htmlFor={`${name}-${additionalInput[0].id}`} className="flex text-base font-bold text-gray-900">
        <p>{title === "추가 링크" ? title : title + " *"}</p>
      </label>
      <div>
        {additionalInput.map(item => (
          <div key={item.id} className="mb-2 flex gap-1">
            <DropDownBox dataType={dropDownType} dropDownWidth={dropDownWidth} />
            <input
              type={type}
              placeholder={placeholder}
              className={`${inputWidth} h-12 rounded-sm border border-solid border-gray-200 px-4 py-3`}
              name={name}
              id={`${name}-${item.id}`}
              autoComplete="off"
            />
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded border border-solid border-gray-200 p-2"
              onClick={() => handleDeleteButtonClick(item.id)}>
              <Image
                width={20}
                src={additionalInput.length > 1 ? deleteIcon : notDeleteIcon}
                alt="삭제 버튼"
                priority
              />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAddButtonClick} className="w-fit rounded-lg p-2 text-blue-500">
        추가하기
      </button>
    </section>
  );
}

export default DropDownSection;
