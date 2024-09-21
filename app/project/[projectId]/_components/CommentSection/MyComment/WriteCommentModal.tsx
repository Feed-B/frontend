"use client";

import React, { useEffect } from "react";
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

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    // 모달이 열릴 때 body의 스크롤을 막음
    document.body.style.overflow = "hidden";
    document.body.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      // 모달이 닫힐 때 body의 스크롤을 다시 활성화
      document.body.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, []);

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
                <WriteButton projectId={projectId} showComment={() => setView("show")} />
              </EnterCommentProvider>
            </div>
          </section>
        </div>
      </div>
    </ModalPortal>
  );
}

export default WriteCommentModal;
