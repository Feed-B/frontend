import Image from "next/image";
import { useState } from "react";
import logoTextIcon from "@/public/icons/logoText.svg";
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
      className="max-h-[771px] px-[102px] pb-12 pt-[100px]">
      <div className="flex flex-col items-center">
        <div className="mb-[87px]">
          <Image src={logoTextIcon} width={180} alt="로고 텍스트" />
        </div>

        <SignUpForm item={item} dataType={dataType} setItem={setItem} handleModalClose={handleModalClose} />
      </div>
    </Modal>
  );
}

export default SignUpModal;
