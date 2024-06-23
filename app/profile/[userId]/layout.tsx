import React from "react";
import { PropsWithChildren } from "react";
import Providers from "@/app/_queryFactory/providers";
import Header from "../../_components/Header/Header";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <Providers>
      <div id="modal" />
      <Header />
      {children}
    </Providers>
  );
}

export default OnlyHeader;
