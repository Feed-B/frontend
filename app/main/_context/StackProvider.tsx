import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from "react";

interface StackContextType {
  stackState: string[];
  setStackState: Dispatch<SetStateAction<string[]>>;
  isChangeStack: (Stack: string) => void;
}

const StackContext = createContext<StackContextType>({
  stackState: [],
  setStackState: () => {},
  isChangeStack: () => {},
});

export const useGetStack = () => useContext(StackContext);

function StackProvider({ children }: { children: ReactNode }) {
  const [stackState, setStackState] = useState<string[]>([]);

  const isChangeStack = useCallback((stack: string) => {
    setStackState(prev => {
      const isAlreadyStack = prev.includes(stack);

      if (isAlreadyStack) {
        return prev;
      } else {
        return [stack, ...prev];
      }
    });
  }, []);
  return <StackContext.Provider value={{ stackState, setStackState, isChangeStack }}>{children}</StackContext.Provider>;
}

export default StackProvider;
