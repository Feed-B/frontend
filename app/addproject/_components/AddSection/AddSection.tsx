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
  id?: number;
  name: string;
  job: string;
  url: string;
}

interface ProjectLinkListType {
  id?: number;
  siteType: string;
  url: string;
}

type AddSectionDataType = TeammateType | ProjectLinkListType;

interface AddSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  dropDownType: string;
  onInputChange: (data: AddSectionDataType[]) => void;
  initialTeammateList?: any[];
  initialProjectLink?: any[];
  setError?: UseFormSetError<AddProjectFormData>;
  clearErrors?: UseFormClearErrors<AddProjectFormData>;
  touchedTeammate?: boolean;
  setTouchedTeammate?: (isTouch: boolean) => void;
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
  name,
  inputWidth,
  dropDownType,
  onInputChange,
  initialTeammateList,
  initialProjectLink,
  setError,
  clearErrors,
  touchedTeammate,
  setTouchedTeammate,
}: AddSectionProps) {
  const [additionalInput, setAdditionalInput] = useState<InputBox[]>([]);
  const [nextId, setNextId] = useState(1);

  const inputBoxLength = additionalInput.length > 1;
  const hasInputData =
    (title === "팀원" && !additionalInput[0]?.job && !additionalInput[0]?.name && !additionalInput[0]?.url) ||
    (title === "추가 링크" && !additionalInput[0]?.siteType && !additionalInput[0]?.url);

  const handleAddButtonClick = () => {
    setAdditionalInput([...additionalInput, { id: nextId, url: "", job: "", name: "", siteType: "" }]);
    setNextId(nextId + 1);
  };

  const handleDeleteButtonClick = (id: number) => {
    if (inputBoxLength) {
      setAdditionalInput(additionalInput.filter(item => item.id !== id));
    } else {
      setAdditionalInput([{ id: nextId, url: "", job: "", name: "", siteType: "" }]);
      setTouchedTeammate && setTouchedTeammate(true);
      setNextId(nextId + 1);
    }
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    setAdditionalInput(prevInput =>
      prevInput.map(input => (input.id === id ? { ...input, [field]: value.trim() } : input))
    );
  };

  useEffect(() => {
    if (initialTeammateList && initialTeammateList.length > 0) {
      setAdditionalInput(
        initialTeammateList.map(item => ({
          id: item.id || 0,
          url: item.url || "",
          job: item.job || "",
          name: item.teammateName || "",
          siteType: "",
        }))
      );
    } else if (initialProjectLink && initialProjectLink.length > 0) {
      setAdditionalInput(
        initialProjectLink.map(item => ({
          id: item.id || 0,
          url: item.url || "",
          job: "",
          name: "",
          siteType: item.siteType || "",
        }))
      );
    } else {
      setAdditionalInput([{ id: 0, url: "", job: "", name: "", siteType: "" }]);
    }
  }, [initialTeammateList, initialProjectLink]);

  useEffect(() => {
    const hasError = touchedTeammate && title === "팀원" && additionalInput.every(input => !input.name || !input.job);
    onInputChange(additionalInput);

    if (hasError) {
      setError && setError("teammateList", { type: "manual", message: "최소 한 개 이상의 팀원 정보를 추가해주세요" });
    } else {
      clearErrors && clearErrors("teammateList");
    }
  }, [additionalInput, onInputChange, title, setError, clearErrors, touchedTeammate]);

  return (
    <>
      <Title title={title} name={`${name}-${additionalInput[0]?.id}-${title === "팀원" ? "name" : "url"}`} label />
      <div>
        {additionalInput.map(item => (
          <div key={item.id} className="mb-2 flex flex-col gap-1 pc:flex-row">
            <div className="flex gap-1">
              <DropDownBox
                dataType={dropDownType}
                handleInputChange={(value: string) => {
                  setTouchedTeammate && setTouchedTeammate(true);
                  handleInputChange(item.id, title === "팀원" ? "job" : "siteType", value);
                }}
                initialDropDownValue={title === "팀원" ? item.job : item.siteType}
              />
              {title === "팀원" && (
                <Input
                  type="text"
                  placeholder="이름"
                  name={`${name}-name`}
                  id={`${name}-${item.id}-name`}
                  value={item.name}
                  inputWidth={inputWidth}
                  onChange={event => handleInputChange(item.id, "name", event.target.value)}
                  onBlur={() => setTouchedTeammate && setTouchedTeammate(true)}
                />
              )}
            </div>
            <div className="flex w-full gap-1">
              <Input
                type="text"
                placeholder="http://"
                name={`${name}-url`}
                id={`${name}-${item.id}-url`}
                value={item.url}
                onChange={event => handleInputChange(item.id, "url", event.target.value)}
              />
              <div className="min-w-11" onClick={() => handleDeleteButtonClick(item.id)}>
                <div
                  className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-solid ${
                    inputBoxLength ? "border-blue-500" : hasInputData ? "border-gray-400" : "border-blue-500"
                  }`}>
                  <Image
                    width={17}
                    src={inputBoxLength ? blueDeleteIcon : hasInputData ? grayDeleteIcon : blueDeleteIcon}
                    alt="삭제 버튼"
                    priority
                  />
                </div>
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
