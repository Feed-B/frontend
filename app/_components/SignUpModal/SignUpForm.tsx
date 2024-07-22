import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { SignUpRequest } from "@/app/_apis/schema/user";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { signUpApi } from "@/app/_apis/signUp";
import { useLogin } from "@/app/_context/LoginProvider";
import { setToken } from "@/app/_utils/handleToken";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SignUpDropdownBox from "./SignUpDropdownBox";

interface SignUpFormProps {
  item: string;
  dataType: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  handleModalClose: () => void;
}

interface SignUpFormData {
  nickName: string;
  aboutMe: string;
  dataType: string;
  email: string;
}

const CONSTANTS = {
  NICKNAME_MAX_LENGTH: 8,
  INTRODUCTION_MAX_LENGTH: 150,
};

function SignUpForm({ item, dataType, setItem, handleModalClose }: SignUpFormProps) {
  const { isOpen, toggleState } = useToggleHook();

  const { email } = useLogin();

  const mutation = useMutation({
    mutationFn: (userData: SignUpRequest) => {
      const response = signUpApi.postSignUp(userData);
      return response;
    },
    onSuccess: data => {
      console.log("Sign up Successful");
      const accessToken = data.token;
      setToken(accessToken);
      window.location.reload(); // 회원가입 후 새로고침
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
      email: email,
      nickName: data.nickName,
      aboutMe: data.aboutMe,
      job: item,
    };

    try {
      await mutation.mutateAsync(requestData);
    } catch (error) {
      console.error("Error occured during mutation", error);
    }

    handleModalClose();
  };

  const handleItemClick = (value: string) => {
    setItem(value);
    toggleState();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[86px] flex flex-col items-center">
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
        className="mb:w-[327px]"
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
          className="h-40 w-96 resize-none rounded-lg border border-gray-200 px-2 py-2 text-sm focus:border-gray-900 focus:outline-none mb:w-[327px]"
        />
      </div>

      <div className="flex justify-center">
        <Button type="submit" buttonSize="normal" bgColor="yellow" className="mt-[54px] font-semibold">
          완료
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
