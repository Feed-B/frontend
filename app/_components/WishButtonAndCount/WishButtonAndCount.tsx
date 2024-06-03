"use client";
import { useState } from "react";
import WishButton from "./WishButton/WishButton";

interface WishButtonAndCountProps {
  isFavorite: boolean;
  wishCount: number;
}

function WishButtonAndCount({ isFavorite = false, wishCount }: WishButtonAndCountProps) {
  const [favoriteState, setFavoriteState] = useState({
    isFavorite: isFavorite,
    wishCountState: wishCount,
  });

  const handleFavorite = () => {
    setFavoriteState(prevState => ({
      isFavorite: prevState.isFavorite ? false : true,
      wishCountState: prevState.isFavorite ? prevState.wishCountState - 1 : prevState.wishCountState + 1,
    }));
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <WishButton isFavoriteState={favoriteState.isFavorite} handleFavorite={handleFavorite} />
      <p className={`min-w-6 text-center text-xl ${favoriteState.isFavorite ? "text-[#FF0000]" : "text-white"} `}>
        {favoriteState.wishCountState}
      </p>
    </div>
  );
}

export default WishButtonAndCount;
