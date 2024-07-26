import Image from "next/image";
import { usePathname } from "next/navigation";
import naverIcon from "@/public/icons/naver.svg";
import kakaoIcon from "@/public/icons/kakao.png";
import feedbee from "@/public/beeIcons/yellowBee.svg";
import logoTextIcon from "@/public/icons/logoText.svg";
import { useLogin } from "@/app/_context/LoginProvider";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

interface LoginModalProps {
  openModal: boolean;
  handleModalClose: () => void;
}
function LoginModal({ openModal, handleModalClose }: LoginModalProps) {
  const pathName = usePathname();

  const { setUrl } = useLogin();

  if (!openModal) {
    return null;
  }

  const NAVER_OAUTH_URL = process.env.NEXT_PUBLIC_NAVER_OAUTH_URL || "default-url";
  const KAKAO_OAUTH_URL = process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL || "default-url";

  const handleNaverLogin = () => {
    window.location.href = NAVER_OAUTH_URL;
    setUrl(pathName);
    handleModalClose();
  };

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_OAUTH_URL;
    setUrl(pathName);
    handleModalClose();
  };

  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      className="max-h-[612px] w-[432px] p-6 mb:w-[360px] mb:p-5">
      <div className="flex flex-col items-center">
        <div className="mt-[73px]">
          <Image src={logoTextIcon} width={180} className="mb-6" alt="로고 텍스트" />
        </div>

        <Image src={feedbee} width={180} height={175} className="mb-[41px]" alt="피드비" priority />

        <p className="mb-6 text-xl font-semibold">
          <span className="text-blue-500">로그인</span>이 필요한 서비스입니다
        </p>

        <Button
          buttonSize="normal"
          bgColor="naver"
          onClick={handleNaverLogin}
          className="mb-2 flex h-[52px] w-96 items-center justify-center gap-3 text-lg font-medium mb:w-[335px]">
          <Image src={naverIcon} alt="네이버 아이콘" width={20} height={20} priority />
          네이버 로그인
        </Button>

        <Button
          buttonSize="normal"
          bgColor="kakao"
          onClick={handleKakaoLogin}
          className="flex h-[52px] w-96 items-center justify-center gap-3 bg-[#FEE500] text-lg font-medium mb:w-[335px]">
          <Image src={kakaoIcon} alt="카카오 아이콘" width={20} height={20} priority />
          카카오 로그인
        </Button>
      </div>
    </Modal>
  );
}

export default LoginModal;
