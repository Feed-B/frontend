"use client";

import React, { Suspense } from "react";
import SkeletonProjectList from "@/app/_components/ProjectList/SkeletonUI/SkeletonProjectList";
import StackProvider from "../../_context/StackProvider";
import SideBar from "../SideBar/SideBar";
import SortFilter from "../SortFilter/SortFilter";
import SearchBar from "../SearchBar/SearchBar";
import StackBox from "../StackBox/StackBox";
import ProjectSection from "../ProjectSection/ProjectSection";

function SelectStack() {
  return (
    <StackProvider>
      <SideBar />
      <section>
        <div className="mb-3 flex h-10 items-center justify-between">
          <SortFilter />
          <SearchBar />
        </div>
        <StackBox />
      </section>
      <Suspense
        fallback={
          <div className="mt-10">
            <SkeletonProjectList />
          </div>
        }>
        <ProjectSection />
      </Suspense>
    </StackProvider>
  );
}

export default SelectStack;
