import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from "react";
interface projectStateType {
  stackState: string[];
  sortCondition: string;
  searchString: string;
  page: number;
  size: number;
  limit: number;
}

interface StackContextType {
  projectState: projectStateType;
  setProjectState: Dispatch<SetStateAction<projectStateType>>;
  isChangeStack: (stack: string) => void;
  isDeleteStack: (stack: string) => void;
}

const StackContext = createContext<StackContextType>({
  projectState: {
    stackState: [],
    sortCondition: "RECENT",
    searchString: "",
    page: 1,
    size: 1,
    limit: 1,
  },
  setProjectState: () => {},
  isChangeStack: () => {},
  isDeleteStack: () => {},
});

export const useGetStack = () => useContext(StackContext);

function StackProvider({ children }: { children: ReactNode }) {
  const [projectState, setProjectState] = useState<projectStateType>({
    stackState: [],
    sortCondition: "RECENT",
    searchString: "",
    page: 1,
    size: 1,
    limit: 1,
  });

  const isChangeStack = useCallback((stack: string) => {
    setProjectState(prev => {
      const isAlreadyStack = prev.stackState.includes(stack);
      if (isAlreadyStack) {
        return prev; // No change needed if stack already exists
      } else {
        return {
          ...prev,
          stackState: [stack, ...prev.stackState],
        };
      }
    });
  }, []);

  const isDeleteStack = useCallback((stack: string) => {
    setProjectState(prev => {
      const isFilterStack = prev.stackState.filter(data => stack !== data);
      return {
        ...prev,
        stackState: isFilterStack,
      };
    });
  }, []);
  return (
    <StackContext.Provider value={{ projectState, setProjectState, isChangeStack, isDeleteStack }}>
      {children}
    </StackContext.Provider>
  );
}

export default StackProvider;
