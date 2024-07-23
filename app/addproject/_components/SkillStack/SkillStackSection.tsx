"use client";

import React, { useEffect } from "react";
import { useGetSkillStack } from "../../_context/SkillStackProvider";
import Title from "../Title";
import SkillStackSearch from "./SkillStackSearch";
import SelectSkillStack from "./SelectSkillStack";

interface SkillStackSectionProps {
  handleTechStackInput: (stackList: string[]) => void;
  initialStackList?: string[];
}

function SkillStackSection({ handleTechStackInput, initialStackList }: SkillStackSectionProps) {
  const { selectedStacks, isAddStack } = useGetSkillStack();

  useEffect(() => {
    if (initialStackList && initialStackList.length > 0) {
      initialStackList.forEach(stack => {
        isAddStack(stack);
      });
    }
  }, [initialStackList, isAddStack]);

  useEffect(() => {
    handleTechStackInput(selectedStacks);
  }, [selectedStacks, handleTechStackInput]);

  return (
    <>
      <Title title="기술스택" name="search" label />
      <SkillStackSearch />
      <SelectSkillStack />
    </>
  );
}

export default SkillStackSection;
