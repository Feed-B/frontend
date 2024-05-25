import React from "react";
import { frontEndStack, backEndStack } from "@/app/_constants/StackData";
import StackList from "./StackList";

function SideBar() {
  return (
    <div className="w-56">
      <StackList title="프론트엔드" stackDatas={frontEndStack} />
      <StackList title="백엔드" stackDatas={backEndStack} />
    </div>
  );
}

export default SideBar;
