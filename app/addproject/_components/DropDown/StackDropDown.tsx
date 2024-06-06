import React from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";
import { StackListType } from "@/app/_types/StackType";
import Button from "@/app/_components/Button/Button";

interface StackDropDown {
  stackData: StackListType[];
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleCheckboxChange: (id: number) => void | Set<number>;
}

function StackDropDown({ stackData, dropdownRef, handleCheckboxChange }: StackDropDown) {
  return (
    <div ref={dropdownRef} className="flex flex-col gap-5">
      <h3 className="text-sm font-normal">사용한 기술스택</h3>
      <div className="flex flex-row items-center gap-3 rounded-lg border border-solid border-[#C4C4C4] p-3">
        <Image src={searchIcon} alt="검색 아이콘" width={16} priority />
        <input className="w-full text-sm font-normal outline-none" name="search" placeholder="Search..." />
      </div>
      <div className="flex h-72 flex-col gap-5 overflow-y-scroll">
        {stackData.map(data => (
          <div key={data.id} className="flex items-center gap-2">
            <input
              key={data.id}
              type="checkbox"
              name="stack"
              id={`stack-${data.id}`}
              onClick={() => handleCheckboxChange(data.id)}
            />
            <label htmlFor={`stack-${data.id}`} className="flex gap-1">
              <Image src={data.image} alt="스택 이미지" width={20} />
              <p>{data.name}</p>
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button buttonSize="small" bgColor="secondBlue">
          <p>초기화</p>
        </Button>
        <Button buttonSize="small" bgColor="mainBlue">
          <p>확인</p>
        </Button>
      </div>
    </div>
  );
}

export default StackDropDown;
