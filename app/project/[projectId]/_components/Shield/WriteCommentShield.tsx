import React from "react";
import Image from "next/image";
import feedbeeIcon from "@/public/icons/feedbee2.svg";
import fullStarIcon from "@/public/icons/fullStar.svg";
import Button from "@/app/_components/Button/Button";
import LoginModal from "@/app/_components/LoginModal/LoginModal";
import useModal from "@/app/_hooks/useModal";

function WriteCommentShield() {
  const { openModal: loginModal, handleModalClose: loginModalClose, handleModalOpen: loginModalOpen } = useModal();
  return (
    <>
      <LoginModal openModal={loginModal} handleModalClose={loginModalClose} />
      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-solid border-gray-200 bg-white px-8 py-4 shadow-lg">
        <div className="flex gap-1">
          <Image src={feedbeeIcon} alt="피드비." width={78} />
          <Image src={fullStarIcon} alt="별." width={28} height={75} />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">방금 보신 프로젝트, 마음에 드셨나요?</p>
          <p className="text-base text-gray-600">프로젝트를 평가하여 작성자에게 피드백을 전달하세요!</p>
        </div>
        <Button className="w-32" buttonSize="normal" bgColor="yellow" onClick={loginModalOpen}>
          피드비 시작하기
        </Button>
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full" />
    </>
  );
}

export default WriteCommentShield;
