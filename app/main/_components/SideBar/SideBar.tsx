"use client";

import React from "react";
import { STACK_CATEGORIES } from "@/app/_constants/StackData";
import StackList from "./StackList";

function SideBar() {
  return (
    <aside className="row-span-3 w-56 mb:hidden tbc:hidden tbr:hidden">
      {STACK_CATEGORIES.map(category => (
        <StackList key={category.id} title={category.title} stackDatas={category.stackDatas} />
      ))}
    </aside>
  );
}

export default SideBar;
