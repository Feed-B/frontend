import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Modal from "@/app/_components/Modal/Modal";
import LoginModal from "@/app/_components/Modal/LoginModal";
import Button from "@/app/_components/Button/Button";
import useModal from "@/app/_hooks/useModal";
import SignUpModal from "@/app/_components/Modal/SignUpModal/SignUpModal";
import { LoginProvider } from "@/app/_context/LoginProvider";
import Providers from "@/app/_context/queryProviders";
import { UserResponse } from "@/app/_apis/schema/userResponse";
import EditProfileModal from "@/app/profile/[userId]/_components/EditProfileModal/EditProfileModal";

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

const SignupModalComponents = () => {
  const { openModal, handleModalClose, handleModalOpen } = useModal();

  const handleClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <SignUpModal openModal={openModal} handleModalClose={handleModalClose} dataType="jop" />
      <Button buttonSize="normal" bgColor="yellow" onClick={handleClick}>
        회원가입
      </Button>
    </>
  );
};

const ProfileModalComponents = () => {
  const userProfileData: UserResponse = {
    id: 1,
    email: "ywy040150@gmail.com",
    nickName: "피드비 개발자",
    aboutMe: "피드비 디자인 시스템",
    job: "FRONTEND",
    imageUrl: "",
  };

  const { openModal, handleModalClose, handleModalOpen } = useModal();

  const handleClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <EditProfileModal profileData={userProfileData} openModal={openModal} handleModalClose={handleModalClose} />
      <Button onClick={handleClick} type="button" bgColor="stroke" buttonSize="normal">
        수정
      </Button>
    </>
  );
};

export const Login: Story = {
  render: () => <LoginModalComponents />,
};

export const Signup: Story = {
  render: () => (
    <Providers>
      <LoginProvider>
        <SignupModalComponents />
      </LoginProvider>
    </Providers>
  ),
};

export const Profile: Story = {
  render: () => (
    <Providers>
      <ProfileModalComponents />
    </Providers>
  ),
};
