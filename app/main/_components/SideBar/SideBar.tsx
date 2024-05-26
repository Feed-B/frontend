"use client";

import React from "react";
import { frontEndStack, backEndStack } from "@/app/_constants/StackData";
import StackProvider from "../../_context/StackProvider";
import StackList from "./StackList";
import StackBox from "./StackBox";

function SideBar() {
  const fullStackData = frontEndStack.concat(backEndStack);

  return (
    <div className="w-56">
      <StackProvider>
        <StackBox stackDatas={fullStackData} />
        <StackList title="프론트엔드" stackDatas={frontEndStack} />
        <StackList title="백엔드" stackDatas={backEndStack} />
      </StackProvider>
    </div>
  );
}

export default SideBar;
