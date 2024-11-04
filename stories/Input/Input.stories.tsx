import { Meta, StoryObj } from "@storybook/react";
import { FieldError } from "react-hook-form";
import Input, { InputProps } from "@/app/_components/Input/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["large", "normal", "small"],
    },
    error: {
      control: "object",
    },
  },
};

export default meta;

export const DefaultInput: StoryObj<InputProps> = {
  args: {
    title: "기본 Input",
    inputSize: "normal",
  },
};

// 에러메시지 input
export const ErrorInput: StoryObj<InputProps> = {
  args: {
    title: "에러 Input",
    inputSize: "normal",
    error: {
      message: "값을 입력해주세요.",
    } as FieldError,
  },
};
