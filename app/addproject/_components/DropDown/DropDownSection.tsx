"use client";

import React, { InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import deleteIcon from "@/public/icons/delete.svg";
import notDeleteIcon from "@/public/icons/notDelete.svg";
import Button from "@/app/_components/Button/Button";
import plusIcon from "@/public/icons/plus.svg";
import DropDownBox from "./DropDownBox";

interface DropDownSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  dropDownType: string;
}

interface InputBox {
  id: number;
  value: string;
}

function DropDownSection({ title, type, placeholder, name, inputWidth, dropDownType }: DropDownSectionProps) {
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
            <DropDownBox dataType={dropDownType} />
            <input
              type={type}
              placeholder={placeholder}
              className={`${inputWidth} h-11 rounded-lg border border-solid border-gray-200 px-4 py-3`}
              name={name}
              id={`${name}-${item.id}`}
              autoComplete="off"
            />
            <button type="button" onClick={() => handleDeleteButtonClick(item.id)}>
              <Image
                width={44}
                src={additionalInput.length > 1 ? deleteIcon : notDeleteIcon}
                alt="삭제 버튼"
                priority
              />
            </button>
          </div>
        ))}
      </div>
      <Button
        buttonSize="normal"
        bgColor="stroke"
        onClick={handleAddButtonClick}
        className="flex items-center justify-center gap-1">
        <Image src={plusIcon} alt="추가하기" width={20} priority />
        {title === "팀원" ? "팀원" : "링크"} 추가하기
      </Button>
    </section>
  );
}

export default DropDownSection;
