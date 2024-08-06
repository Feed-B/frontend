import { useState } from "react";

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (insertValue: ((prev: number) => number) | number) => {
    setCurrentPage(insertValue);
  };

  return { currentPage, handleCurrentPage };
};

export default useCurrentPage;
