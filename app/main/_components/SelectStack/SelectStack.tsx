"use client";

import React from "react";
import StackProvider from "../../_context/StackProvider";
import SideBar from "../SideBar/SideBar";
import SortFilter from "../SortFilter/SortFilter";
import SearchBar from "../SearchBar/SearchBar";
import StackBox from "../SideBar/StackBox";

function SelectStack() {
  return (
    <StackProvider>
      <SideBar />
      <div>
        <div className="mb-3 flex h-10 flex-row items-center justify-between">
          <SortFilter />
          <SearchBar />
        </div>
        <StackBox />
      </div>
    </StackProvider>
  );
}

export default SelectStack;
