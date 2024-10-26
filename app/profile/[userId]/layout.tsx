import React from "react";
import { PropsWithChildren } from "react";
import Providers from "@/app/_context/queryProviders";

function OnlyHeader({ children }: PropsWithChildren) {
  return <Providers>{children}</Providers>;
}

export default OnlyHeader;
