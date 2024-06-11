"use client";

import React from "react";
import SkillStackProvider from "../../_context/SkillStackProvider";
import Title from "../Title";
import SkillStackSearch from "./SkillStackSearch";
import SelectSkillStack from "./SelectSkillStack";

function SkillStackSection() {
  return (
    <SkillStackProvider>
      <section className="flex flex-col gap-4">
        <Title title="기술스택" name="search" label />
        <SkillStackSearch />
        <SelectSkillStack />
      </section>
    </SkillStackProvider>
  );
}

export default SkillStackSection;
