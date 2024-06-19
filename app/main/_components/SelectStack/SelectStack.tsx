"use client";

import React from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { myProjectList } from "@/app/_components/ProjectList/mockDataCardList";
import StackProvider from "../../_context/StackProvider";
import SideBar from "../SideBar/SideBar";
import SortFilter from "../SortFilter/SortFilter";
import SearchBar from "../SearchBar/SearchBar";
import StackBox from "../StackBox/StackBox";

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
      <section className="col-start-2 mt-[40px]">
        <ProjectList projectList={myProjectList.data} />
      </section>
    </StackProvider>
  );
}

export default SelectStack;
