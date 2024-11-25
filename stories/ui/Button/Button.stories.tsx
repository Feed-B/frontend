import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "@/app/_components/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonSize: {
      control: "select",
      options: ["large", "normal", "small"],
    },
    bgColor: {
      control: "radio",
      options: ["yellow", "white", "gray", "blue", "stroke", "naver", "kakao"],
    },
    disabled: {
      control: "boolean",
    },
    //type = "button"
    type: { table: { disable: true } },
  },
};

export default meta;

export const Large: StoryObj<ButtonProps> = {
  args: {
    children: "버튼",
    buttonSize: "large",
    bgColor: "yellow",
  },
};

export const Normal: StoryObj<ButtonProps> = {
  args: {
    children: "버튼",
    buttonSize: "normal",
    bgColor: "yellow",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: "버튼",
    buttonSize: "small",
    bgColor: "yellow",
  },
};
