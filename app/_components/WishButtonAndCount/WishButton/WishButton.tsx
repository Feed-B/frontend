"use client";
import Image from "next/image";
import emptyHeartIcon from "@/public/icons/emptyHeart.svg";
import fullHeartIcon from "@/public/icons/fullHeart.svg";

interface WishButtonProps {
  isFavoriteState: boolean;
  handleFavorite: () => void;
}

function WishButton({ isFavoriteState, handleFavorite }: WishButtonProps) {
  return (
    <button type="button" className="relative h-6 w-6" onClick={handleFavorite}>
      <Image fill src={isFavoriteState ? fullHeartIcon : emptyHeartIcon} alt="favorite-project" />
    </button>
  );
}

export default WishButton;
