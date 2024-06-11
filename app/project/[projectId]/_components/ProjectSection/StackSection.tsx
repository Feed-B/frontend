import React from "react";
import Image from "next/image";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";

interface StackListProps {
  stackList: string[];
}

function StackSection({ stackList }: StackListProps) {
  return (
    <section className="px-8">
      <h3 className="mb-4 text-lg font-semibold">사용한 스킬</h3>
      <ul className="flex flex-wrap gap-2">
        {stackList.map(stack => {
          const stackItem = FULL_STACK_DATA.find(item => item.name === stack);
          return (
            <li className="flex items-center gap-1 rounded-[44px] bg-gray-100 p-2" key={stackItem?.id}>
              <Image src={stackItem?.image || ""} alt="기술 스택 이미지." width={20} />
              <p className="text-sm">{stack}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default StackSection;
