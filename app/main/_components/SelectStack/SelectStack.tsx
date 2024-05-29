"use client";

import React from "react";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
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
        <div className="flex h-10  flex-row justify-between">
          <SortFilter />
          <SearchBar />
        </div>
        <StackBox stackDatas={FULL_STACK_DATA} />
      </div>
    </StackProvider>
  );
}

export default SelectStack;
