import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SignUpRequest } from "@/app/_apis/schema/user";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { signUpApi } from "@/app/_apis/signUp";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SignUpDropdownBox from "./SignUpDropdownBox";

interface SignUpFormProps {
  item: string;
  dataType: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

interface SignUpFormData {
  nickName: string;
  aboutMe: string;
  dataType: string;
}

const CONSTANTS = {
  NICKNAME_MAX_LENGTH: 8,
  INTRODUCTION_MAX_LENGTH: 150,
};

function SignUpForm({ item, dataType, setItem }: SignUpFormProps) {
  const { isOpen, toggleState } = useToggleHook();

  const mutation = useMutation({
    mutationFn: (userData: SignUpRequest) => {
      const response = signUpApi.postSignUp(userData);
      return response;
    },
    onSuccess: data => {
      console.log("Sign up Successful", data);
    },
    onError: error => {
      console.error("Sign up failed", error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ mode: "onBlur", reValidateMode: "onBlur" });

  const onSubmit: SubmitHandler<SignUpFormData> = async data => {
    const requestData: SignUpRequest = {
      email: "test3@test.com",
      nickName: data.nickName,
      aboutMe: data.aboutMe,
      job: item,
    };

    try {
      await mutation.mutateAsync(requestData);
    } catch (error) {
      console.error("Error occured during mutation", error);
    }

    console.log(requestData);
  };

  const handleItemClick = (value: string) => {
    setItem(value);
    toggleState();
  };

  return (
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
          {...register("aboutMe", {
            maxLength: {
              value: CONSTANTS.INTRODUCTION_MAX_LENGTH,
              message: `소개는 ${CONSTANTS.INTRODUCTION_MAX_LENGTH}자를 초과할 수 없습니다`,
            },
          })}
          className="h-40 w-96 rounded-lg border border-gray-200 px-2 py-2 text-sm focus:border-gray-900 focus:outline-none"
        />
      </div>

      <Button type="submit" buttonSize="normal" bgColor="yellow" className="mt-16 font-semibold">
        완료
      </Button>
    </form>
  );
}

export default SignUpForm;
