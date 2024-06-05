import React from "react";
import { PropsWithChildren } from "react";
import Header from "../_components/Header/Header";

function OnlyHeader({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default OnlyHeader;
