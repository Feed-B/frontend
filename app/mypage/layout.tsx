import React from "react";
import { PropsWithChildren } from "react";
import Header from "../_components/Header/Header";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default OnlyHeader;
