"use client";
import { MouseEvent } from "react";
import selectProfileIcon from "@/public/icons/blackProfile.svg";
import defaultProfileIcon from "@/public/icons/defaultProfile.svg";
import likePotIcon from "@/public/icons/emptyBlackPot.svg";
import unlikePotIcon from "@/public/icons/fullDarkPot.svg";
import { MY_PAGE_TEXT } from "../constant";
import ProjectCategoryButton from "./ProjectCategoryButton";

interface MyPageCategory {
  selectCategory: string;
  handleSelectCategory: (event: MouseEvent<HTMLButtonElement>) => void;
  isMyPage: boolean;
}

function MyPageCategory({ selectCategory, handleSelectCategory, isMyPage }: MyPageCategory) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-bold text-gray-900 mb:hidden tbc:hidden tbr:hidden">{MY_PAGE_TEXT.MY_PAGE}</div>
      <ProjectCategoryButton
        onClick={handleSelectCategory}
        id={"myProject"}
        isSelect={selectCategory === "myProject"}
        icon={selectCategory === "myProject" ? selectProfileIcon : defaultProfileIcon}
        text={isMyPage ? "MY_PROJECT" : "PROJECT"}
      />
      <ProjectCategoryButton
        onClick={handleSelectCategory}
        id={"wishProject"}
        isSelect={selectCategory === "wishProject"}
        icon={selectCategory === "wishProject" ? unlikePotIcon : likePotIcon}
        text={"WISH_PROJECT"}
      />
    </div>
  );
}

export default MyPageCategory;
