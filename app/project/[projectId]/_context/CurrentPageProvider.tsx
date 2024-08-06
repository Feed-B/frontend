"use client";

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface CurrentPageContextType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CurrentPageContext = createContext<CurrentPageContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
});

export const useCurrentPageContext = () => useContext(CurrentPageContext);

export const CurrentPageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>{children}</CurrentPageContext.Provider>;
};

export default CurrentPageProvider;
