"use client";

import React from "react";
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
        <div className="mb-3 flex h-10 flex-row items-center justify-between">
          <SortFilter />
          <SearchBar />
        </div>
        <StackBox />
      </section>
    </StackProvider>
  );
}

export default SelectStack;
