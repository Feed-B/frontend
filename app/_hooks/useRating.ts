import { useState } from "react";

export const MAX_STAR = 5;

interface RatingType {
  rating: number[];
  isDragging: boolean;
  handleMouseDown: (categoryId: number, rating: number) => void;
  handleMouseMove: (categoryId: number, rating: number) => void;
  handleMouseUp: () => void;
}

export const useRating = (): RatingType => {
  const [rating, setRating] = useState(new Array(4).fill(0));
  const [isDragging, setIsDragging] = useState(false);

  const handleRating = (categoryId: number, rating: number) => {
    setRating(prevRating => {
      const newRating = [...prevRating];
      newRating[categoryId] = rating;
      return newRating;
    });
  };

  const handleMouseDown = (categoryId: number, rating: number) => {
    setIsDragging(true);
    handleRating(categoryId, rating);
  };

  const handleMouseMove = (categoryId: number, rating: number) => {
    if (isDragging) {
      handleRating(categoryId, rating);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    rating,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
