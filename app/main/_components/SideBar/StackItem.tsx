"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import { useGetStack } from "@/app/main/_context/StackProvider";

interface StackItemProps {
  children: ReactNode;
  image: string;
}

function StackItem({ children, image }: StackItemProps) {
  const { isChangeStack } = useGetStack();

  return (
    <li className="flex cursor-pointer flex-row items-center gap-2 p-2" onClick={() => isChangeStack(children + "")}>
      <Image src={image} alt="기술스택입니다." width={20} />
      <p className="text-sm font-normal">{children}</p>
    </li>
  );
}

export default StackItem;
