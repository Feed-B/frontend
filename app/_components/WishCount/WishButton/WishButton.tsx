"use client";
import Image from "next/image";
import { useState } from "react";
import emptyHeartIcon from "@/public/icons/empty-heart.svg";
import fullHeartIcon from "@/public/icons/full-heart.svg";

function WishButton({ isFavorite = false }) {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);

  const handleFavorite = () => {
    setIsFavoriteState(prevState => !prevState);
  };
  return (
    <button type="button" className="relative h-6 w-6" onClick={handleFavorite}>
      <Image fill src={isFavoriteState ? fullHeartIcon : emptyHeartIcon} alt="favorite-project" />
    </button>
  );
}

export default WishButton;
