import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useToggleHook from "@/app/_hooks/useToggleHook";
import chevronLeftIcon from "@/public/icons/chevronLeft.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import SignUpDropdownBox from "./SignUpDropdownBox";

interface SignUpFormData {
  nickName: string;
  dataType: string;
}

interface SignUpModalProps {
  openModal: boolean;
  handleModalClose: () => void;
  dataType: string;
}

const CONSTANTS = {
  NICKNAME_MAX_LENGTH: 8,
  INTRODUCTION_MAX_LENGTH: 150,
};

function SignUpModal({ openModal, handleModalClose, dataType }: SignUpModalProps) {
  const [item, setItem] = useState(dataType === "job" ? "직무" : "");

  const { isOpen, toggleState } = useToggleHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({ mode: "onBlur", reValidateMode: "onBlur" });

  const onSubmit: SubmitHandler<SignUpFormData> = data => {
    console.log(data);
  };

  const handleModalCloseWidthReset = () => {
    handleModalClose();
    reset();
    setItem(dataType === "job" ? "직무" : "");
  };

  const handleItemClick = (value: string) => {
    setItem(value);
    toggleState();
  };

  if (!openModal) {
    return null;
  }

  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalCloseWidthReset}
      className="max-h-[771px] px-[102px] pb-12 pt-[116px]">
      <div className="flex flex-col items-center">
        <div className="mb-[52px] text-[56px] font-extrabold">
          <span className="mr-2 tracking-[-8px]">FEED</span>
          <span className="bg-yellow px-1.5 py-1">B</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <Input
            title="닉네임*"
            type="text"
            name="nickName"
            inputSize="normal"
            placeholder={`닉네임을 입력해주세요(최대 ${CONSTANTS.NICKNAME_MAX_LENGTH}자)`}
            register={register("nickName", {
              required: {
                value: true,
                message: "닉네임을 입력해주세요",
              },
              maxLength: {
                value: CONSTANTS.NICKNAME_MAX_LENGTH,
                message: `닉네임은 ${CONSTANTS.NICKNAME_MAX_LENGTH}자를 초과할 수 없습니다`,
              },
            })}
            error={errors.nickName}
          />

          <SignUpDropdownBox
            dataType={dataType}
            item={item}
            isOpen={isOpen}
            handleItemClick={handleItemClick}
            toggleState={toggleState}
          />

          <div className="flex flex-col">
            <label htmlFor="introduction" className="mb-2 mt-4 text-base font-bold text-gray-900">
              소개
            </label>
            <textarea
              placeholder={`자신을 표현할 간단한 소개를 작성해주세요 (${CONSTANTS.INTRODUCTION_MAX_LENGTH}자)`}
              id="introduction"
              className="h-40 w-96 rounded-lg border border-gray-200 px-2 py-2 text-sm focus:border-gray-900 focus:outline-none"
            />
          </div>
        </form>
        <Button buttonSize="normal" bgColor="black" className="mt-16 font-semibold">
          완료
        </Button>
      </div>

      <Image
        src={chevronLeftIcon}
        width={32}
        height={32}
        className="absolute left-0 top-0 my-4 ml-4 cursor-pointer"
        alt="뒤로가기"
        priority
      />
    </Modal>
  );
}

export default SignUpModal;
