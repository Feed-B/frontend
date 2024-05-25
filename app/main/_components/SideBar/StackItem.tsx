import Image from "next/image";
import React, { ReactNode } from "react";

interface StackItemProps {
  children: ReactNode;
  image: string;
}

function StackItem({ children, image }: StackItemProps) {
  return (
    <li className="flex flex-row items-center gap-2 p-2">
      <Image src={image} alt="기술스택입니다." width={20} height={20} />
      <p className="text-sm font-normal">{children}</p>
    </li>
  );
}

export default StackItem;
