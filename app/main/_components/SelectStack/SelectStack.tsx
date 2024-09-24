"use client";
import React, { Suspense } from "react";
import SkeletonProjectList from "@/app/_components/ProjectList/SkeletonUI/SkeletonProjectList";
import DeferredComponent from "@/app/_components/ProjectList/SkeletonUI/DeferredComponent";
import StackProvider from "../../_context/StackProvider";
import SideBar from "../SideBar/SideBar";
import SortFilter from "../SortFilter/SortFilter";
import SearchBar from "../SearchBar/SearchBar";
import StackBox from "../StackBox/StackBox";
import ProjectSection from "../ProjectSection/ProjectSection";
import MobileFilterBar from "../MobileFilterBar/MobileFilterBar";

function SelectStack() {
  return (
    <StackProvider>
      <SideBar />
      <section className="w-full mb:mt-6  mb:flex mb:justify-center tbc:mt-6 tbc:flex tbc:justify-center tbr:flex tbr:justify-center">
        <div className="mb-3 flex h-10 items-center justify-between">
          <SortFilter />
          <SearchBar />
        </div>
        <StackBox />
        <MobileFilterBar />
      </section>
      <Suspense
        fallback={
          <DeferredComponent className="mt-10">
            <SkeletonProjectList />
          </DeferredComponent>
        }>
        <ProjectSection />
      </Suspense>
    </StackProvider>
  );
}

export default SelectStack;
