import { useState } from "react";

const useImageIndex = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = (imageListLength: number) => {
    setIndex(prevIndex => Math.min(prevIndex + 1, imageListLength - 1));
  };

  return { index, handlePrev, handleNext };
};

export default useImageIndex;
