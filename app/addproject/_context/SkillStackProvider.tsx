import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from "react";

interface SkillStackContextType {
  selectedStacks: string[];
  setSelectedStacks: Dispatch<SetStateAction<string[]>>;
  isAddStack: (stack: string) => void;
  isDeleteStack: (stack: string) => void;
}

const SkillStackContext = createContext<SkillStackContextType>({
  selectedStacks: [],
  setSelectedStacks: () => {},
  isAddStack: () => {},
  isDeleteStack: () => {},
});

export const useGetSkillStack = () => useContext(SkillStackContext);

function SkillStackProvider({ children }: { children: ReactNode }) {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const isAddStack = useCallback((stack: string) => {
    setSelectedStacks(prev => {
      const isAlreadyStack = prev.includes(stack);

      if (isAlreadyStack) {
        return prev;
      } else {
        return [stack, ...prev];
      }
    });
  }, []);

  const isDeleteStack = useCallback((stack: string) => {
    setSelectedStacks(prev => {
      const isFilterStack = prev.filter(data => stack !== data);

      return isFilterStack;
    });
  }, []);
  return (
    <SkillStackContext.Provider value={{ selectedStacks, setSelectedStacks, isAddStack, isDeleteStack }}>
      {children}
    </SkillStackContext.Provider>
  );
}

export default SkillStackProvider;
