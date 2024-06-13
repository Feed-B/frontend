"use client";
import { MouseEvent } from "react";
import { myProjectList, wishProjectList } from "@/app/_components/ProjectList/mockDataCardList";
import selectProfileIcon from "@/public/icons/blackProfile.svg";
import defaultProfileIcon from "@/public/icons/defaultProfile.svg";
import selectHeartIcon from "@/public/icons/fullHeart.svg";
import defaultHeartIcon from "@/public/icons/grayHeart.svg";
import ProjectCategoryButton from "./ProjectCategoryButton";
import { MY_PAGE_TEXT } from "./constant";

interface MyPageCategory {
  selectCategory: string;
  handleSelectCategory: (event: MouseEvent<HTMLButtonElement>) => void;
}

function MyPageCategory({ selectCategory, handleSelectCategory }: MyPageCategory) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-bold text-gray-900">{MY_PAGE_TEXT.MY_PAGE}</div>
      <ProjectCategoryButton
        onClick={handleSelectCategory}
        id={"myProject"}
        isSelect={selectCategory === "myProject"}
        icon={selectCategory === "myProject" ? selectProfileIcon : defaultProfileIcon}
        text="MY_PROJECT"
        count={`(${myProjectList.count})`}
      />
      <ProjectCategoryButton
        onClick={handleSelectCategory}
        id={"wishProject"}
        isSelect={selectCategory === "wishProject"}
        icon={selectCategory === "wishProject" ? selectHeartIcon : defaultHeartIcon}
        text="WISH_PROJECT"
        count={`(${wishProjectList.count})`}
      />
    </div>
  );
}

export default MyPageCategory;
