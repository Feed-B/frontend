import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from "react";

interface StackContextType {
  stackState: string[];
  setStackState: Dispatch<SetStateAction<string[]>>;
  isChangeStack: (stack: string) => void;
  isDeleteStack: (stack: string) => void;
}

const StackContext = createContext<StackContextType>({
  stackState: [],
  setStackState: () => {},
  isChangeStack: () => {},
  isDeleteStack: () => {},
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

  const isDeleteStack = useCallback((stack: string) => {
    setStackState(prev => {
      const isFilterStack = prev.filter(data => stack !== data);

      return isFilterStack;
    });
  }, []);
  return (
    <StackContext.Provider value={{ stackState, setStackState, isChangeStack, isDeleteStack }}>
      {children}
    </StackContext.Provider>
  );
}

export default StackProvider;
