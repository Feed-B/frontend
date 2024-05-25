import React from "react";
import { PropsWithChildren } from "react";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-[#6b6b6b] py-6 text-center text-white">헤더</div>
      {children}
    </>
  );
}

export default OnlyHeader;
