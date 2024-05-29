import React from "react";
import Image from "next/image";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";

interface StackListProps {
  stackList: string[];
}

function StackSection({ stackList }: StackListProps) {
  return (
    <section className="mt-10">
      <p className="mb-4 text-lg font-bold">사용한 스킬</p>
      <div className="rounded-xl border border-solid border-[#EBEBEB] bg-white p-3">
        <ul className="flex flex-wrap gap-4">
          {stackList.map((stack, i) => {
            const stackItem = FULL_STACK_DATA.find(item => item.name === stack);
            return (
              <li className="flex items-center gap-1" key={i}>
                <Image src={stackItem?.iamge || ""} alt="기술 스택 이미지." />
                <p className="text-xs">{stack}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default StackSection;
