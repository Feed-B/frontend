"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  children: ReactNode;
  openModal: boolean;
  handleModalClose: () => void;
  className?: string;
}

function Modal({ children, openModal, handleModalClose, className }: ModalProps) {
  const modalClass = twMerge(
    "flex flex-col fixed top-1/2 left-1/2  bg-white rounded-lg zIndex-modal transform -translate-x-1/2 -translate-y-1/2 px-28 py-32  mobile:px-20 mobile:py-28",
    className
  );

  const open = "block";

  const handleOverlayClick = () => {
    handleModalClose();
  };

  return (
    <>
      <div className="bg-black-overlay fixed left-0 top-0 h-full w-full" onClick={handleOverlayClick} />
      <div className={`${modalClass} ${openModal ? open : ""}`}>{children}</div>
    </>
  );
}

export default Modal;
