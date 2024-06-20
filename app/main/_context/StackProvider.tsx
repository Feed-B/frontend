import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from "react";
interface projectStateType {
  projectTechStacks: string[];
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
    projectTechStacks: [],
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
    projectTechStacks: [],
    sortCondition: "RECENT",
    searchString: "",
    page: 0,
    size: 0,
    limit: 0,
  });

  const isChangeStack = useCallback((stack: string) => {
    setProjectState(prev => {
      const isAlreadyStack = prev.projectTechStacks.includes(stack);
      if (isAlreadyStack) {
        return prev; // No change needed if stack already exists
      } else {
        return {
          ...prev,
          projectTechStacks: [stack, ...prev.projectTechStacks],
        };
      }
    });
  }, []);

  const isDeleteStack = useCallback((stack: string) => {
    setProjectState(prev => {
      const isFilterStack = prev.projectTechStacks.filter(data => stack !== data);
      return {
        ...prev,
        projectTechStacks: isFilterStack,
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
