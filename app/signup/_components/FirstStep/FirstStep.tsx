import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import firstStepBar from "@/public/icons/firstStepBar.svg";
import Input from "@/app/_components/Input/Input";
// import ExampleButton from "../ExampleButton/ExampleButton";
import Button from "../../../_components/Button/Button";

interface FirstStepProps {
  nextStep: () => void;
  nickName: string;
}

function Step1({ nextStep }: FirstStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStepProps>({ mode: "onBlur", reValidateMode: "onBlur" });

  const onSubmit: SubmitHandler<FirstStepProps> = data => {
    console.log(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-[auto] mt-[117px] flex max-w-[420px] flex-col items-center">
        <Image src={firstStepBar} alt="첫번째회원가입스텝바" />

        <div className="mb-[90px] mt-12 text-[#3A3A3A]">닉네임과 소개를 작성해 주세요</div>

        <Input
          title="닉네임*"
          type="text"
          name="nickName"
          placeholder="사용하실 닉네임을 작성해주세요"
          inputSize="medium"
          className="focus:border-blue-500 focus:outline-none"
          register={register("nickName", {
            required: {
              value: true,
              message: "닉네임을 입력해주세요",
            },
            maxLength: {
              value: 8,
              message: "닉네임은 8자를 초과할 수 없습니다",
            },
          })}
          error={errors.nickName}
        />

        <div className="flex flex-col">
          <label htmlFor="introduction" className="text-base font-bold text-gray-900">
            소개
          </label>
          <textarea
            placeholder="자기를 어필할 수 있는 소개글을 작성해주세요 (150자)"
            id="introduction"
            className="mb-[200px] h-40 w-[379px] rounded border border-[#EBEBEB] px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* <ExampleButton /> */}

        <Button buttonSize="small" bgColor="mainBlue" onClick={nextStep}>
          다음으로
        </Button>
      </div>
    </form>
  );
}

export default Step1;
