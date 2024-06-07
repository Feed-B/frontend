"use client";

import React from "react";
import Image from "next/image";
import closeIcon from "@/public/icons/crossLine.svg";
import shareIcon from "@/public/icons/share.svg";
import Modal from "@/app/_components/Modal/Modal";
import KebabDropDown from "@/public/icons/kebab.svg";
import CommentCount from "../Comment/CommentCount";
import CommentProfile from "../Comment/CommentProfile";
import ReflyCommentItem from "./ReflyCommentItem";

interface CommentModalProps {
  handleModalClose: () => void;
  openModal: boolean;
  commnetId?: number;
}

function CommentModal({ openModal, handleModalClose }: CommentModalProps) {
  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      className="relative w-[792px] border border-solid p-6">
      <button type="button" className="absolute right-6 top-6" onClick={handleModalClose}>
        <Image src={closeIcon} alt="모달 닫기 버튼입니다." width={24} />
      </button>
      <section className="mt-10 w-full p-4">
        <div className="flex items-center justify-between">
          <CommentProfile />
          <div className="flex items-center gap-2">
            <CommentCount />
            <Image className="cursor-pointer" src={shareIcon} alt="공유하기." width={24} />
            <Image src={KebabDropDown} alt="댓글 모달 메뉴" />
            {/*드롭박스 연결해야함*/}
          </div>
        </div>
        <p className="mt-4 min-h-[150px] w-full text-sm font-normal text-[#1C1C1C]">
          제가말이죠 오늘 댓글 모달을 만들어 보았습니다. 참 잘했죠? 좋은 코드 리뷰 부탁드립니다? 안 해주면
          찾아가겠습니다.
        </p>
      </section>
      <hr className="border-[#1C1C1C]" />
      <section className="mt-4 px-8">
        {/*별점자리*/}
        <div>별점자리</div>
      </section>
      <section className="mt-4">
        <div>
          <ReflyCommentItem />
        </div>
      </section>
      <section>
        <div className="border border-solid p-3">
          <input placeholder="코멘트 인풋 들어올 자리" />
        </div>
      </section>
    </Modal>
  );
}
export default CommentModal;
