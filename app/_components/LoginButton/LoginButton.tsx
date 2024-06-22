"use client";

import useModal from "@/app/_hooks/useModal";
import LoginModal from "@/app/_components/LoginModal/LoginModal";
import Button from "../Button/Button";

function LoginButton() {
  const { openModal: loginModal, handleModalClose: loginModalClose, handleModalOpen: loginModalOpen } = useModal();

  return (
    <>
      <LoginModal openModal={loginModal} handleModalClose={loginModalClose} />

      <Button buttonSize="normal" bgColor="yellow" onClick={loginModalOpen}>
        로그인
      </Button>
    </>
  );
}

export default LoginButton;
