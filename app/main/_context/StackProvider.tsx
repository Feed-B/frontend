import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from "react";
interface projectStateType {
  stackState: string[];
  sortCondition: "RECENT" | "LIKES" | "VIEWS";
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
  isChangeSearchString: (searchString: string) => void;
  isChangeCondition: (sortCondition: "RECENT" | "LIKES" | "VIEWS") => void;
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
  isChangeSearchString: () => {},
  isChangeCondition: () => {},
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

  const isChangeSearchString = useCallback((searchString: string) => {
    setProjectState(prev => ({
      ...prev,
      searchString,
    }));
  }, []);

  const isChangeCondition = useCallback((sortCondition: "RECENT" | "LIKES" | "VIEWS") => {
    setProjectState(prev => ({
      ...prev,
      sortCondition,
    }));
  }, []);

  return (
    <StackContext.Provider
      value={{
        projectState,
        setProjectState,
        isChangeStack,
        isDeleteStack,
        isChangeSearchString,
        isChangeCondition,
      }}>
      {children}
    </StackContext.Provider>
  );
}

export default StackProvider;
