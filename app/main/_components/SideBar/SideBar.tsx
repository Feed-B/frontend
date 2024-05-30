"use client";

import React from "react";
import { FRONT_END_STACK, BACK_END_STACK } from "@/app/_constants/StackData";
import StackList from "./StackList";

function SideBar() {
  return (
    <aside className="row-span-3 w-56">
      <StackList title="프론트엔드" stackDatas={FRONT_END_STACK} />
      <StackList title="백엔드" stackDatas={BACK_END_STACK} />
    </aside>
  );
}

export default SideBar;
