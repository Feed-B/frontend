"use client";

import React, { InputHTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import { UseFormClearErrors, UseFormSetError } from "react-hook-form";
import blueDeleteIcon from "@/public/icons/blueDelete.svg";
import grayDeleteIcon from "@/public/icons/grayDelete.svg";
import Button from "@/app/_components/Button/Button";
import plusIcon from "@/public/icons/plus.svg";
import { AddProjectFormData } from "@/app/_types/AddProjectFormDataType";
import Title from "../Title";
import Input from "../Input";
import DropDownBox from "../DropDown/DropDownBox";

interface TeammateType {
  name: string;
  job: string;
  url: string;
}

interface ProjectLinkListType {
  siteType: string;
  url: string;
}

type AddSectionDataType = TeammateType | ProjectLinkListType;

interface AddSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  dropDownType: string;
  onInputChange: (data: AddSectionDataType[]) => void;
  setError?: UseFormSetError<AddProjectFormData>;
  clearErrors?: UseFormClearErrors<AddProjectFormData>;
}

interface InputBox {
  id: number;
  url: string;
  job: string;
  name: string;
  siteType: string;
}

function AddSection({
  title,
  placeholder,
  name,
  inputWidth,
  dropDownType,
  onInputChange,
  setError,
  clearErrors,
}: AddSectionProps) {
  const [additionalInput, setAdditionalInput] = useState<InputBox[]>([
    { id: 0, url: "", job: "", name: "", siteType: "" },
  ]);
  const [nextId, setNextId] = useState(1);

  const handleAddButtonClick = () => {
    setAdditionalInput([...additionalInput, { id: nextId, url: "", job: "", name: "", siteType: "" }]);
    setNextId(nextId + 1);
  };

  const handleDeleteButtonClick = (id: number) => {
    if (additionalInput.length > 1) {
      setAdditionalInput(additionalInput.filter(item => item.id !== id));
    }
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    setAdditionalInput(prevInput => prevInput.map(input => (input.id === id ? { ...input, [field]: value } : input)));
  };

  useEffect(() => {
    const filteredInput = additionalInput.map(item => {
      if (title === "팀원") {
        const { name, job, url } = item;
        return { name, job, url } as TeammateType;
      } else {
        const { siteType, url } = item;
        return { siteType, url } as ProjectLinkListType;
      }
    });
    onInputChange(filteredInput);

    if (title === "팀원") {
      let hasError = false;
      if (!additionalInput[0].name || !additionalInput[0].job) {
        setError && setError("teammateList", { type: "manual", message: "최소 한 개 이상의 팀원 정보를 추가해주세요" });
        hasError = true;
      }
      if (!hasError) {
        clearErrors && clearErrors("teammateList");
      }
    }
  }, [additionalInput, onInputChange, title, setError, clearErrors]);

  return (
    <>
      <Title title={title} name={`${name}-${additionalInput[0].id}-primary`} label />
      <div>
        {additionalInput.map(item => (
          <div key={item.id} className="mb-2 flex gap-1">
            <DropDownBox
              dataType={dropDownType}
              handleInputChange={(value: string) =>
                handleInputChange(item.id, title === "팀원" ? "job" : "siteType", value)
              }
            />
            <Input
              type="text"
              placeholder={placeholder}
              name={`${name}-primary`}
              id={`${name}-${item.id}-primary`}
              inputWidth={inputWidth}
              onChange={event => handleInputChange(item.id, title === "팀원" ? "name" : "url", event.target.value)}
            />
            {title === "팀원" && (
              <Input
                type="text"
                placeholder="http://"
                name={`${name}-secondary`}
                id={`${name}-${item.id}-secondary`}
                onChange={event => handleInputChange(item.id, "url", event.target.value)}
              />
            )}
            <div className="min-w-11" onClick={() => handleDeleteButtonClick(item.id)}>
              <div
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-solid ${additionalInput.length > 1 ? "border-blue-500" : "border-gray-400"}`}>
                <Image
                  width={17}
                  src={additionalInput.length > 1 ? blueDeleteIcon : grayDeleteIcon}
                  alt="삭제 버튼"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        buttonSize="normal"
        bgColor="stroke"
        onClick={handleAddButtonClick}
        className="flex w-fit items-center justify-center gap-1 border-none text-blue-500 hover:bg-gray-100">
        <Image src={plusIcon} alt="추가하기" width={20} priority />
        {title === "팀원" ? "팀원" : "링크"} 추가하기
      </Button>
    </>
  );
}

export default AddSection;
