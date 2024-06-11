"use client";

import React, { InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import deleteIcon from "@/public/icons/delete.svg";
import notDeleteIcon from "@/public/icons/notDelete.svg";
import Button from "@/app/_components/Button/Button";
import plusIcon from "@/public/icons/plus.svg";
import Title from "../Title";
import Input from "../Input";
import DropDownBox from "../DropDown/DropDownBox";

interface AddSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  dropDownType: string;
}

interface InputBox {
  id: number;
  value: string;
}

function AddSection({ title, placeholder, name, inputWidth, dropDownType }: AddSectionProps) {
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
      <Title title={title} name={`${name}-${additionalInput[0].id}-primary`} label />
      <div>
        {additionalInput.map(item => (
          <div key={item.id} className="mb-2 flex gap-1">
            <DropDownBox dataType={dropDownType} />
            <Input
              type="text"
              placeholder={placeholder}
              name={`${name}-primary`}
              id={`${name}-${item.id}-primary`}
              inputWidth={inputWidth}
            />
            {title === "팀원" && (
              <Input type="text" placeholder="http://" name={`${name}-secondary`} id={`${name}-${item.id}-secondary`} />
            )}
            <div className="min-w-11" onClick={() => handleDeleteButtonClick(item.id)}>
              <Image
                width={44}
                src={additionalInput.length > 1 ? deleteIcon : notDeleteIcon}
                alt="삭제 버튼"
                priority
              />
            </div>
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
    </>
  );
}

export default AddSection;
