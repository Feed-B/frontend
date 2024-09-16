"use client";

import Image from "next/image";
import Button from "@/app/_components/Button/Button";
import plusIcon from "@/public/icons/blackPlus.svg";
import useModal from "@/app/_hooks/useModal";
import WriteCommentModal from "./WriteCommentModal";

function WriteCommentButton() {
  const { openModal, handleModalClose, handleModalOpen } = useModal();

  return (
    <>
      {openModal && <WriteCommentModal handleModalClose={handleModalClose} />}
      <div className="fixed bottom-5 right-5 z-10">
        <Button
          buttonSize={"normal"}
          bgColor={"yellow"}
          onClick={() => handleModalOpen()}
          className="gap-1 rounded-[32px] shadow-lg">
          <p>리뷰 남기기</p>
          <Image src={plusIcon} alt={"내 리뷰 작성하기."} />
        </Button>
      </div>
    </>
  );
}

export default WriteCommentButton;
