"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useModal from "@/app/_hooks/useModal";
import { setRedirectUrl } from "@/app/_utils/handleToken";
import LoginModal from "@/app/_components/Modal/LoginModal";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import Button from "../Button/Button";

function LoginButton() {
  const { openModal: loginModal, handleModalClose: loginModalClose, handleModalOpen: loginModalOpen } = useModal();
  const pathName = usePathname();
  const router = useRouter();

  const { windowWidth } = useBrowserSize();

  const handleClick = () => {
    if (windowWidth <= 1024) {
      router.push("/signin");
    } else {
      setRedirectUrl(pathName);
      loginModalOpen();
    }
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
