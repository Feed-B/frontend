"use client";

import React from "react";
import Image from "next/image";
import closeIcon from "@/public/icons/close.svg";
import ModalPortal from "@/app/_utils/ModalPortal";

interface WriteCommentModalProps {
  handleModalClose: () => void;
}

function WriteCommentModal({ handleModalClose }: WriteCommentModalProps) {
  return (
    <ModalPortal>
      <div className="fixed bottom-0 z-50 w-full animate-modalPositionUp rounded-se-3xl rounded-ss-3xl border border-solid border-[#D6D6D6] bg-white p-10 pc:hidden">
        <section className="flex">
          <Image
            src={closeIcon}
            alt="닫기 아이콘"
            width={32}
            height={32}
            priority
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleModalClose}
          />
        </section>
        <section className="row-span-3 h-full w-full">
          <p>모달</p>
        </section>
      </div>
    </ModalPortal>
  );
}

export default WriteCommentModal;
