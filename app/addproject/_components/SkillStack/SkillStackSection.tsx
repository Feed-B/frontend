"use client";

import React, { useEffect, useRef } from "react";
import { useGetSkillStack } from "../../_context/SkillStackProvider";
import Title from "../Title";
import SkillStackSearch from "./SkillStackSearch";
import SelectSkillStack from "./SelectSkillStack";

interface SkillStackSectionProps {
  handleTechStackInput: (stackList: string[]) => void;
  initialStackList?: string[];
  setTouchedStack?: (isTouch: boolean) => void;
  error?: string;
}

function SkillStackSection({ handleTechStackInput, initialStackList, setTouchedStack, error }: SkillStackSectionProps) {
  const { selectedStacks, isAddStack } = useGetSkillStack();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && initialStackList && initialStackList.length > 0) {
      initialStackList.forEach(stack => {
        isAddStack(stack);
      });
      hasInitialized.current = true;
    }
  }, [initialStackList, isAddStack]);

  useEffect(() => {
    handleTechStackInput(selectedStacks);
  }, [selectedStacks, handleTechStackInput]);

  return (
    <>
      <Title title="기술스택" name="search" label />
      <SkillStackSearch setTouchedStack={setTouchedStack} error={error} />
      <SelectSkillStack />
    </>
  );
}

export default SkillStackSection;
