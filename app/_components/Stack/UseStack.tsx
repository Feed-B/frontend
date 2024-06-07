import React from "react";
import Image from "next/image";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";

interface StackListProps {
  stackList: string[];
}

function UseStack({ stackList }: StackListProps) {
  return (
    <div className="rounded-xl border border-solid border-gray-200 bg-gray-100 p-3">
      <ul className="flex flex-wrap gap-4">
        {stackList.map(stack => {
          const stackItem = FULL_STACK_DATA.find(item => item.name === stack);
          return (
            <li className="flex items-center gap-1" key={stackItem?.id}>
              <Image src={stackItem?.image || ""} alt="기술 스택 이미지." width={20} />
              <p className="text-xs">{stack}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseStack;
