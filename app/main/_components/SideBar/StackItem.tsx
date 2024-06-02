"use client";

import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { useGetStack } from "@/app/main/_context/StackProvider";
import { ImageType } from "@/app/_types/StackType";
import useToggleHook from "@/app/_hooks/useToggleHook";

interface StackItemProps {
  children: ReactNode;
  image: ImageType;
}

function StackItem({ children, image }: StackItemProps) {
  const { stackState, isChangeStack, isDeleteStack } = useGetStack();
  const { isOpen: stackClicked, toggleState, changecloseState, changeopenState } = useToggleHook();

  const clickStack = () => {
    toggleState();

    if (stackClicked) {
      isDeleteStack(children + "");
    } else {
      isChangeStack(children + "");
    }
  };

  useEffect(() => {
    const inStack = stackState.includes(children + "");

    if (inStack) {
      changeopenState();
    } else {
      changecloseState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stackState]);

  return (
    <li
      className={`flex w-40 cursor-pointer items-center gap-2 rounded-lg p-2 ${stackClicked ? "bg-[#F8FAFB]" : "opacity-50"}`}
      onClick={clickStack}>
      <Image src={image} alt="기술스택입니다." width={20} />
      <p className="text-sm font-normal">{children}</p>
    </li>
  );
}

export default StackItem;
