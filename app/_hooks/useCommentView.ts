import { useState } from "react";

type viewType = "show" | "write" | "edit";

const useCommentView = () => {
  const [view, setView] = useState<viewType>("write");

  // const toggleState = () => {
  //   setView("show");
  // };

  // const changecloseState = () => {
  //   setView("write");
  // };

  // const changeopenState = () => {
  //   setView("edit");
  // };

  return { view, setView };
};

export default useCommentView;
