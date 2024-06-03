import React from "react";
import { PropsWithChildren } from "react";
import Header from "../_components/Header/Header";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="mb-20 ml-[50%] mt-10 flex w-[90rem] max-w-[976px] -translate-x-1/2 flex-col gap-y-16">
        {children}
      </div>
    </>
  );
}

export default OnlyHeader;
