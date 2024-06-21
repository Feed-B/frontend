"use client";
import { MouseEvent, useState } from "react";
import Image from "next/image";
import emptyProjectListIcon from "@/public/icons/emptyWhitePot.svg";
import fullProjectListIcon from "@/public/icons/fullDarkPot.svg";
import emptyProjectIcon from "@/public/icons/emptyBlackPot.svg";
import fullProjectIcon from "@/public/icons/fullBrightPot.svg";

interface WishButtonAndCountProps {
  isFavorite: boolean;
  wishCount: number;
  colorMode?: "bright" | "dark";
}

function WishButtonAndCount({ isFavorite = false, wishCount, colorMode = "dark" }: WishButtonAndCountProps) {
  const isDarkMode = colorMode === "dark";

  const full = {
    icon: isDarkMode ? fullProjectListIcon : fullProjectIcon,
    text: isDarkMode ? "text-yellow-500 font-bold" : "text-yellow-600 font-bold",
  };

  const empty = {
    icon: isDarkMode ? emptyProjectListIcon : emptyProjectIcon,
    text: isDarkMode ? "text-white" : "text-gray-900",
  };

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
      <button type="button" className="relative h-6 w-6" onClick={handleFavorite}>
        <Image fill src={favoriteState.isFavorite ? full.icon : empty.icon} alt="프로젝트 찜하기." />
      </button>
      <p className={`min-w-5 text-center text-sm ${favoriteState.isFavorite ? full.text : empty.text}`}>
        {favoriteState.wishCountState}
      </p>
    </div>
  );
}

export default WishButtonAndCount;
