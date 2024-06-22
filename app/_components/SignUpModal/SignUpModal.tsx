import Image from "next/image";
import { useState } from "react";
import chevronLeftIcon from "@/public/icons/chevronLeft.svg";
import Modal from "../Modal/Modal";
import SignUpForm from "./SignUpForm";

interface SignUpModalProps {
  openModal: boolean;
  handleModalClose: () => void;
  dataType: string;
}

function SignUpModal({ openModal, handleModalClose, dataType }: SignUpModalProps) {
  const [item, setItem] = useState(dataType === "job" ? "직무" : "");

  const handleModalCloseWidthReset = () => {
    handleModalClose();
    setItem(dataType === "job" ? "직무" : "");
  };

  if (!openModal) {
    return null;
  }

  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalCloseWidthReset}
      className="max-h-[771px] px-[102px] pb-12 pt-[116px]">
      <div className="flex flex-col items-center">
        <div className="mb-[52px] text-[56px] font-extrabold">
          <span className="mr-2 tracking-[-8px]">FEED</span>
          <span className="bg-yellow-500 px-1.5 py-1">B</span>
        </div>

        <SignUpForm item={item} dataType={dataType} setItem={setItem} />
      </div>

      <Image
        src={chevronLeftIcon}
        width={32}
        height={32}
        className="absolute left-0 top-0 my-4 ml-4 cursor-pointer"
        alt="뒤로가기"
        priority
      />
    </Modal>
  );
}

export default SignUpModal;
