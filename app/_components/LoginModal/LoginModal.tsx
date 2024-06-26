import Image from "next/image";
import naverIcon from "@/public/icons/naver.svg";
import kakaoIcon from "@/public/icons/kakao.png";
import feedbee from "@/public/icons/feedbee.svg";
import logoTextIcon from "@/public/icons/logoText.svg";
import dottedLine from "@/public/images/dottedLine.svg";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

interface LoginModalProps {
  openModal: boolean;
  handleModalClose: () => void;
}
function LoginModal({ openModal, handleModalClose }: LoginModalProps) {
  if (!openModal) {
    return null;
  }

  const NAVER_OAUTH_URL = process.env.NEXT_PUBLIC_NAVER_OAUTH_URL || "default-url";
  const KAKAO_OAUTH_URL = process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL || "default-url";

  const handleNaverLogin = () => {
    window.location.href = NAVER_OAUTH_URL;
  };

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_OAUTH_URL;
  };

  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      className="max-h-[771px] w-[588px] pb-[88px] pt-[100px]">
      <div className="flex flex-col items-center">
        <div className="mb-[74px]">
          <Image src={logoTextIcon} width={180} alt="로고 텍스트" />
        </div>

        <Image src={feedbee} width={248} height={240} className="mb-[109px]" alt="피드비" priority />

        <Image
          src={dottedLine}
          width={679.047}
          height={252.715}
          className="absolute bottom-[115px] -z-10"
          alt="점선"
          priority
        />

        <Button
          buttonSize="normal"
          bgColor="naver"
          onClick={handleNaverLogin}
          className="mb-1.5 flex h-[52px] w-96 items-center justify-center gap-3 text-lg font-medium">
          <Image src={naverIcon} alt="네이버 아이콘" width={20} height={20} priority />
          네이버 로그인
        </Button>

        <Button
          buttonSize="normal"
          bgColor="kakao"
          onClick={handleKakaoLogin}
          className="flex h-[52px] w-96 items-center justify-center gap-3 bg-[#FEE500] text-lg font-medium">
          <Image src={kakaoIcon} alt="카카오 아이콘" width={20} height={20} priority />
          카카오 로그인
        </Button>
      </div>
    </Modal>
  );
}

export default LoginModal;
