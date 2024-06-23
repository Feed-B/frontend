"use client";

import React, { useEffect } from "react";
import { useGetSkillStack } from "../../_context/SkillStackProvider";
import Title from "../Title";
import SkillStackSearch from "./SkillStackSearch";
import SelectSkillStack from "./SelectSkillStack";

interface SkillStackSectionProps {
  handleTechStackInput: (stackList: string[]) => void;
}

function SkillStackSection({ handleTechStackInput }: SkillStackSectionProps) {
  const { selectedStacks } = useGetSkillStack();

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
