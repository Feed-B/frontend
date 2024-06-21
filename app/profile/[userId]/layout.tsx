import React from "react";
import { PropsWithChildren } from "react";
import Header from "../../_components/Header/Header";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <>
      <div id="modal" />
      <Header />
      {children}
    </>
  );
}

export default OnlyHeader;
