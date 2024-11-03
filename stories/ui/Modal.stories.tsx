import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Modal from "@/app/_components/Modal/Modal";
import LoginModal from "@/app/_components/Modal/LoginModal";
import Button from "@/app/_components/Button/Button";
import useModal from "@/app/_hooks/useModal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

const LoginModalComponents = () => {
  const { openModal: loginModal, handleModalClose: loginModalClose, handleModalOpen: loginModalOpen } = useModal();

  const handleClick = () => {
    loginModalOpen();
  };

  return (
    <>
      <LoginModal openModal={loginModal} handleModalClose={loginModalClose} />
      <Button buttonSize="normal" bgColor="yellow" onClick={handleClick}>
        로그인
      </Button>
    </>
  );
};

export const LoginModalStory: Story = {
  render: () => <LoginModalComponents />,
};
