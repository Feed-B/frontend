"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import ModalPortal from "@/app/_utils/ModalPortal";
import closeIcon from "@/public/icons/close.svg";

interface ModalProps extends PropsWithChildren {
  openModal: boolean;
  handleModalClose: () => void;
  className?: string;
}

function Modal({ children, openModal, handleModalClose, className }: ModalProps) {
  const modalClass = twMerge(
    "fixed top-1/2 left-1/2 bg-white rounded-lg z-50 transform -translate-x-1/2 -translate-y-1/2 mobile:px-20 mobile:py-28",
    className
  );

  const open = "block";

  return (
    <ModalPortal>
      <div role="dialog" className="fixed left-0 top-0 z-50 h-full w-full bg-black-overlay" onClick={handleModalClose}>
        <div onClick={event => event.stopPropagation()} className={`${modalClass} ${openModal ? open : ""}`}>
          <Image
            src={closeIcon}
            alt="닫기 아이콘"
            width={32}
            height={32}
            priority
            className="absolute right-0 top-0 my-4 mr-4 cursor-pointer"
            onClick={handleModalClose}
          />
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

export default Modal;
