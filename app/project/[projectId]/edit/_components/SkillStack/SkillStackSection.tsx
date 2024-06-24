"use client";

import React, { useEffect } from "react";
import Title from "@/app/addproject/_components/Title";
import { useGetSkillStack } from "@/app/addproject/_context/SkillStackProvider";
import SkillStackSearch from "./SkillStackSearch";
import SelectSkillStack from "./SelectSkillStack";

interface SkillStackSectionProps {
  handleTechStackInput: (stackList: string[]) => void;
  initialStackList?: string[];
}

function SkillStackSection({ handleTechStackInput, initialStackList }: SkillStackSectionProps) {
  const { selectedStacks } = useGetSkillStack();
  console.log("initialStackList", initialStackList);
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
