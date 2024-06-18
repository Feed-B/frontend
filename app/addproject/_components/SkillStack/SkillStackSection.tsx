"use client";

import React from "react";
import SkillStackProvider from "../../_context/SkillStackProvider";
import Title from "../Title";
import SkillStackSearch from "./SkillStackSearch";
import SelectSkillStack from "./SelectSkillStack";

function SkillStackSection() {
  return (
    <SkillStackProvider>
      <Title title="기술스택" name="search" label />
      <SkillStackSearch />
      <SelectSkillStack />
    </SkillStackProvider>
  );
}

export default SkillStackSection;
