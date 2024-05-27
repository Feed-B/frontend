"use client";

import React from "react";
import { FRONT_END_STACK, BACK_END_STACK, FULL_STACK_DATA } from "@/app/_constants/StackData";
import StackProvider from "../../_context/StackProvider";
import StackList from "./StackList";
import StackBox from "./StackBox";

function SideBar() {
  return (
    <div className="mr-5 w-56">
      <StackProvider>
        <StackBox stackDatas={FULL_STACK_DATA} />
        <StackList title="프론트엔드" stackDatas={FRONT_END_STACK} />
        <StackList title="백엔드" stackDatas={BACK_END_STACK} />
      </StackProvider>
    </div>
  );
}

export default SideBar;
