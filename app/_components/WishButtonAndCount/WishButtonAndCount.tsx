"use client";
import { useState } from "react";
import Image from "next/image";
import emptyHeartIcon from "@/public/icons/emptyHeart.svg";
import fullHeartIcon from "@/public/icons/fullHeart.svg";

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
    <div className="flex items-center justify-center gap-0.5">
      <button type="button" className="relative h-4 w-4" onClick={handleFavorite}>
        <Image fill src={favoriteState ? fullHeartIcon : emptyHeartIcon} alt="favorite-project" />
      </button>
      <p className={`min-w-5 text-center text-sm ${favoriteState.isFavorite ? "text-[#FF0000]" : "text-white"} `}>
        {favoriteState.wishCountState}
      </p>
    </div>
  );
}

export default WishButtonAndCount;
