import React from "react";
import Image from "next/image";
import { StackListType } from "@/app/_types/StackType";
import topArrowIcon from "@/public/icons/topArrow.svg";
import bottomArrowIcon from "@/public/icons/bottomArrow.svg";
import StackItem from "./StackItem";

interface StackListProps {
  stackDatas: StackListType[];
  title: string;
}

function StackList({ stackDatas, title }: StackListProps) {
  return (
    <div className="mt-5 w-full">
      <div className="flex w-full flex-row items-center gap-1 py-2">
        <h2 className="text-base font-semibold">{title}</h2>
        <button>
          <Image src={topArrowIcon} alt="위로 향한 화살표 버튼." width={20} height={20} />
        </button>
        <Image src={bottomArrowIcon} alt="아래로 향한 화살표 버튼." width={20} height={20} />
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        {stackDatas.map((data, i) => (
          <StackItem key={i} image={data.iamge}>
            {data.name}
          </StackItem>
        ))}
      </ul>
    </div>
  );
}

export default StackList;
