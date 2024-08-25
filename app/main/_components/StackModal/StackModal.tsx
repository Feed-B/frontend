"use client";

import React from "react";
import Image from "next/image";
import { STACK_CATEGORIES } from "@/app/_constants/StackData";
import closeIcon from "@/public/icons/close.svg";
import StackList from "../SideBar/StackList";
import { useGetStack } from "../../_context/StackProvider";

interface StackModalProps {
  handleModalClose: () => void;
}

function StackModal({ handleModalClose }: StackModalProps) {
  const { projectState, isChangeCondition } = useGetStack();

  return (
    <div className="animate-modalPositionUp absolute z-50 h-full w-full rounded-3xl border border-solid border-[#D6D6D6] bg-white p-10 pc:hidden">
      <section className="mb-5 mt-10 flex h-6 items-center gap-3">
        <Image
          src={closeIcon}
          alt="닫기 아이콘"
          width={32}
          height={32}
          priority
          className="absolute right-0 top-0 my-4 mr-4 cursor-pointer"
          onClick={handleModalClose}
        />
        <button
          className={`border-r border-solid pr-2 text-lg font-bold leading-4 ${projectState.sortCondition === "RECENT" ? "text-[#3F3F3F]" : "text-gray-400"}`}
          onClick={() => isChangeCondition("RECENT")}>
          최신순
        </button>
        <button
          className={`border-r border-solid pr-2 text-lg font-bold leading-4 ${projectState.sortCondition === "LIKES" ? "text-[#3F3F3F]" : "text-gray-400"}`}
          onClick={() => isChangeCondition("LIKES")}>
          좋아요순
        </button>
        <button
          className={`text-lg font-bold ${projectState.sortCondition === "VIEWS" ? "text-[#3F3F3F]" : "text-gray-400"}`}
          onClick={() => isChangeCondition("VIEWS")}>
          조회순
        </button>
      </section>
      <section className="row-span-3 w-full">
        {STACK_CATEGORIES.map(category => (
          <StackList key={category.id} title={category.title} stackDatas={category.stackDatas} />
        ))}
      </section>
    </div>
  );
}

export default StackModal;
