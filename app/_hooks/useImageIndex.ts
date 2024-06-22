import { useState } from "react";

const useImageIndex = () => {
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  const handlePrev = (width: number) => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0));
    setTranslate((index - 1) * width);
  };

  const handleNext = (width: number, imageListLength: number) => {
    setIndex(prevIndex => Math.min(prevIndex + 1, imageListLength - 1));
    setTranslate((index + 1) * width);
  };

  return { index, translate, handlePrev, handleNext };
};

export default useImageIndex;
