"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLogin } from "@/app/_context/LoginProvider";
import useModal from "@/app/_hooks/useModal";
import LoginModal from "@/app/_components/LoginModal/LoginModal";
import Button from "../Button/Button";

function LoginButton() {
  const { openModal: loginModal, handleModalClose: loginModalClose, handleModalOpen: loginModalOpen } = useModal();
  const pathName = usePathname();

  const { setUrl, url } = useLogin();

  const handleClick = () => {
    setUrl(pathName);

    loginModalOpen();
  };

  useEffect(() => {}, [url]);

  return (
    <>
      <LoginModal openModal={loginModal} handleModalClose={loginModalClose} />

      <Button buttonSize="normal" bgColor="yellow" onClick={handleClick}>
        로그인
      </Button>
    </>
  );
}

export default LoginButton;
