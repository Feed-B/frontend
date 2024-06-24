import React from "react";
import Image from "next/image";
import crossLineIcon from "@/public/icons/crossLine.svg";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
import { useGetSkillStack } from "@/app/addproject/_context/SkillStackProvider";

function SelectSkillStackBox() {
  const stackData = FULL_STACK_DATA;
  const { selectedStacks, isDeleteStack } = useGetSkillStack();

  return (
    <div className="flex min-h-10 flex-wrap gap-2">
      {selectedStacks.length === 0 ? (
        <div className="flex items-center rounded-[44px] bg-gray-100 px-4 py-2 text-sm font-normal text-gray-600">
          선택된 스킬이 없습니다.
        </div>
      ) : (
        selectedStacks.map(stack => {
          const stackItem = stackData.find(item => item.name === stack);
          return (
            <div
              key={stackItem?.id}
              className="flex items-center rounded-[44px] bg-gray-100 p-2 text-sm font-normal text-gray-900">
              <Image src={stackItem?.image || ""} alt="기술 스택 이미지" width={20} className="mr-1" />
              <p className="mr-1.5">{stack}</p>
              <Image
                src={crossLineIcon}
                width={20}
                alt="기술스택 삭제"
                className="cursor-pointer"
                onClick={() => isDeleteStack(stack)}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default SelectSkillStackBox;
