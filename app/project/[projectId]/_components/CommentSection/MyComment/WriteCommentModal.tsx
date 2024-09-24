"use client";

import React from "react";
import Image from "next/image";
import closeIcon from "@/public/icons/close.svg";
import ModalPortal from "@/app/_utils/ModalPortal";
import ToolTip from "../../Comment/ToolTip";
import EnterCommentProvider from "../../../_context/EnterCommentProvider";
import EnterRating from "../../Comment/EnterRating";
import EnterText from "../../Comment/EnterText";
import WriteButton from "../../Comment/WriteButton";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";

interface Props {
  openModal: boolean;
  projectId: number;
  handleModalClose: () => void;
}

function WriteCommentModal({ projectId, openModal, handleModalClose }: Props) {
  const { setView } = useMyCommentContext();

  const handleWriteComment = () => {
    handleModalClose();
    setView("show");
  };

  return (
    <ModalPortal>
      <div className="fixed left-0 top-0 z-50 h-full w-full bg-black-overlay" onClick={handleModalClose}>
        <div
          className={`${openModal && "block"} fixed bottom-0 z-50 w-full animate-modalPositionUp rounded-se-3xl rounded-ss-3xl border border-solid border-gray-600 bg-white p-10 pc:hidden`}
          onClick={event => event.stopPropagation()}>
          <section className="flex">
            <Image
              src={closeIcon}
              alt="모달 닫기."
              width={24}
              height={24}
              priority
              className="absolute right-4 top-4 cursor-pointer"
              onClick={handleModalClose}
            />
          </section>
          <section className="row-span-3 h-full w-full">
            <div className="mb-8 flex items-center gap-1">
              <p className="text-lg font-semibold text-gray-900">프로젝트를 리뷰해주세요</p>
              <ToolTip />
            </div>
            <div className="flex flex-col gap-6">
              <EnterCommentProvider>
                <EnterRating />
                <EnterText />
                <WriteButton projectId={projectId} showComment={handleWriteComment} />
              </EnterCommentProvider>
            </div>
          </section>
        </div>
      </div>
    </ModalPortal>
  );
}

export default WriteCommentModal;
