import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

type viewType = "show" | "write" | "edit";

interface MyCommentContextType {
  view: viewType;
  setView: Dispatch<SetStateAction<viewType>>;
}

const MyCommentContext = createContext<MyCommentContextType>({
  view: "write",
  setView: () => {},
});

export const useMyCommentContext = () => useContext(MyCommentContext);

export const MyCommentProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<viewType>("write");

  return <MyCommentContext.Provider value={{ view, setView }}>{children}</MyCommentContext.Provider>;
};

export default MyCommentProvider;
