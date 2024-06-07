"use client";
import { MouseEvent, useState } from "react";
import Image from "next/image";
import emptyHeartIcon from "@/public/icons/emptyHeart.svg";
import fullHeartIcon from "@/public/icons/fullHeart.svg";
import emptyBlackHeartIcon from "@/public/icons/emptyBlackHeart.svg";

interface WishButtonAndCountProps {
  isFavorite: boolean;
  wishCount: number;
  colorMode?: "bright" | "dark";
}

function WishButtonAndCount({ isFavorite = false, wishCount, colorMode = "bright" }: WishButtonAndCountProps) {
  const [favoriteState, setFavoriteState] = useState({
    isFavorite: isFavorite,
    wishCountState: wishCount,
  });

  const handleFavorite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFavoriteState(prevState => ({
      isFavorite: prevState.isFavorite ? false : true,
      wishCountState: prevState.isFavorite ? prevState.wishCountState - 1 : prevState.wishCountState + 1,
    }));
  };

  return (
    <div className="flex items-center justify-center gap-0.5">
      <button type="button" className="relative h-4 w-4" onClick={handleFavorite}>
        <Image
          fill
          src={favoriteState.isFavorite ? fullHeartIcon : colorMode === "bright" ? emptyHeartIcon : emptyBlackHeartIcon}
          alt="favorite-project"
        />
      </button>
      <p
        className={`min-w-5 text-center text-sm ${favoriteState.isFavorite ? "text-[#FF0000]" : colorMode === "bright" ? "text-white" : "text-gray-900"}`}>
        {favoriteState.wishCountState}
      </p>
    </div>
  );
}

export default WishButtonAndCount;
