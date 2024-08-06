"use client";
import { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import emptyProjectListIcon from "@/public/icons/emptyWhitePot.svg";
import fullProjectListIcon from "@/public/icons/fullDarkPot.svg";
import emptyProjectIcon from "@/public/icons/emptyBlackPot.svg";
import fullProjectIcon from "@/public/icons/fullBrightPot.svg";
import { handleLikeProject } from "@/app/_apis/handleLikeProject";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import useModal from "@/app/_hooks/useModal";
import LoginModal from "../LoginModal/LoginModal";

interface WishButtonAndCountProps {
  isFavorite: boolean;
  wishCount: number;
  colorMode?: "bright" | "dark";
  projectId: number;
}

function WishButtonAndCount({ isFavorite = false, wishCount, colorMode = "dark", projectId }: WishButtonAndCountProps) {
  const isDarkMode = colorMode === "dark";
  const { data: currentUserId } = useQuery(userQueryKeys.userId());
  const { openModal, handleModalOpen, handleModalClose } = useModal();

  const full = {
    icon: isDarkMode ? fullProjectListIcon : fullProjectIcon,
    text: isDarkMode ? "text-yellow-500 font-bold" : "text-yellow-600 font-bold",
  };

  const empty = {
    icon: isDarkMode ? emptyProjectListIcon : emptyProjectIcon,
    text: isDarkMode ? "text-white" : "text-gray-900",
  };

  const [favoriteState, setFavoriteState] = useState({
    isFavorite: false,
    wishCountState: 0,
  });

  useEffect(() => {
    setFavoriteState({
      isFavorite: isFavorite,
      wishCountState: wishCount,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const likeMutation = useMutation({
    mutationFn: (projectId: number) => {
      return handleLikeProject.postLikeProject({ projectId });
    },
  });
  const unLikeMutation = useMutation({
    mutationFn: (projectId: number) => {
      return handleLikeProject.deleteLikeProject({ projectId });
    },
  });

  const handleFavorite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentUserId) {
      if (favoriteState.isFavorite) {
        unLikeMutation.mutate(projectId);
        setFavoriteState(prevState => ({
          isFavorite: false,
          wishCountState: prevState.wishCountState - 1,
        }));
      } else {
        likeMutation.mutate(projectId);
        setFavoriteState(prevState => ({
          isFavorite: true,
          wishCountState: prevState.wishCountState + 1,
        }));
      }
    } else {
      handleModalOpen();
    }
  };

  return (
    <>
      {openModal && <LoginModal openModal={openModal} handleModalClose={handleModalClose} />}
      <div className="flex items-center justify-center gap-0.5">
        <button
          type="button"
          className={`flex min-w-5 items-center gap-2.5 text-center text-sm ${favoriteState.isFavorite ? full.text : empty.text}`}
          onClick={handleFavorite}>
          <Image
            width={24}
            height={24}
            src={favoriteState.isFavorite ? full.icon : empty.icon}
            alt="프로젝트 찜하기."
          />
          {favoriteState.wishCountState}
        </button>
      </div>
    </>
  );
}

export default WishButtonAndCount;
