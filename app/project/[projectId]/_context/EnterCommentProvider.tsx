import React, { Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from "react";
import { createContext } from "react";

interface EnterCommentContextType {
  rating: number[];
  isDragging: boolean;
  handleMouseDown: (categoryId: number, rating: number) => void;
  handleMouseMove: (categoryId: number, rating: number) => void;
  handleMouseUp: () => void;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  handleCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const EnterCommentContext = createContext<EnterCommentContextType>({
  rating: [],
  isDragging: false,
  handleMouseDown: () => {},
  handleMouseMove: () => {},
  handleMouseUp: () => {},
  comment: "",
  setComment: () => {},
  handleCommentChange: () => {},
});

export const useEnterCommentContext = () => useContext(EnterCommentContext);

function EnterCommentProvider({ children }: { children: ReactNode }) {
  const [rating, setRating] = useState<number[]>([0, 0, 0, 0]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [comment, setComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleRating = useCallback((categoryId: number, rating: number) => {
    setRating(prevRating => {
      const newRating = [...prevRating];
      newRating[categoryId] = rating;
      return newRating;
    });
  }, []);

  const handleMouseDown = useCallback(
    (categoryId: number, rating: number) => {
      setIsDragging(true);
      handleRating(categoryId, rating);
    },
    [handleRating]
  );

  const handleMouseMove = useCallback(
    (categoryId: number, rating: number) => {
      if (isDragging) {
        handleRating(categoryId, rating);
      }
    },
    [handleRating, isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <EnterCommentContext.Provider
      value={{
        rating,
        isDragging,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        comment,
        setComment,
        handleCommentChange,
      }}>
      {children}
    </EnterCommentContext.Provider>
  );
}

export default EnterCommentProvider;
