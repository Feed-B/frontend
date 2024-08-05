"use client";

import { usePathname } from "next/navigation";
import useModal from "@/app/_hooks/useModal";
import { setRedirectUrl } from "@/app/_utils/handleToken";
import LoginModal from "@/app/_components/LoginModal/LoginModal";
import Button from "../Button/Button";

function LoginButton() {
  const { openModal: loginModal, handleModalClose: loginModalClose, handleModalOpen: loginModalOpen } = useModal();
  const pathName = usePathname();

  const handleClick = () => {
    setRedirectUrl(pathName);
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
}

export default LoginButton;
