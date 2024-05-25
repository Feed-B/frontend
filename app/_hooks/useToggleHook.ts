import { useState } from "react";

function useToggleHook() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleState = () => {
    setIsOpen(prev => !prev);
  };

  const ChangecloseState = () => {
    setIsOpen(false);
  };

  const ChangeopenState = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    toggleState,
    ChangecloseState,
    ChangeopenState,
  };
}

export default useToggleHook;
