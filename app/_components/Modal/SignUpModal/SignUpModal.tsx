import { useState } from "react";
import Modal from "../Modal";
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
      className="max-h-[612px] w-[432px] p-6 mb:w-[360px]">
      <div>
        <SignUpForm item={item} dataType={dataType} setItem={setItem} handleModalClose={handleModalClose} />
      </div>
    </Modal>
  );
}

export default SignUpModal;
