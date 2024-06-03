import React from "react";
import { PropsWithChildren } from "react";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-[#6b6b6b] py-6 text-center text-white">헤더</div>
      <div className="mb-20 ml-[50%] mt-10 flex w-[90rem] max-w-[976px] -translate-x-1/2 flex-col gap-y-16">
        {children}
      </div>
    </>
  );
}

export default OnlyHeader;
