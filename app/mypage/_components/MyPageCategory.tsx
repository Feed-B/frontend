"use client";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import mockDataCardList from "@/app/_components/ProjectList/mockDataCardList";
import selectProfileIcon from "@/public/icons/blackProfile.svg";
import defaultProfileIcon from "@/public/icons/defaultProfile.svg";
import selectHeartIcon from "@/public/icons/fullHeart.svg";
import defaultHeartIcon from "@/public/icons/grayHeart.svg";
import ProjectCategoryButton from "./ProjectCategoryButton";

function MyPageCategory({ isSelect }: { isSelect: boolean }) {
  const [selectCategory, setSelectCategory] = useState("myProject");

  const handleSelectCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectCategory(event.currentTarget.id);
    console.log(selectCategory);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-bold text-gray-900">마이페이지</div>
      <ProjectCategoryButton onClick={handleSelectCategory} id={"myProject"} isSelect={selectCategory === "myProject"}>
        <div className="flex items-center gap-2.5">
          <Image
            width={24}
            height={24}
            src={selectCategory === "myProject" ? selectProfileIcon : defaultProfileIcon}
            alt="내 프로젝트 보기"
          />
          <div className={`text-sm font-semibold ${isSelect ? defaultHeartIcon : selectHeartIcon}`}>내 프로젝트</div>
        </div>
        <div>{`(${mockDataCardList.myProjectList.count})`}</div>
      </ProjectCategoryButton>
      <ProjectCategoryButton
        onClick={handleSelectCategory}
        id={"wishProject"}
        isSelect={selectCategory === "wishProject"}>
        <div className="flex items-center gap-2.5">
          <Image
            width={24}
            height={24}
            src={selectCategory === "wishProject" ? selectHeartIcon : defaultHeartIcon}
            alt="찜한 프로젝트 보기"
          />
          <div
            className={`text-sm font-semibold ${selectCategory === "wishProject" ? defaultHeartIcon : selectHeartIcon}`}>
            내 프로젝트
          </div>
        </div>
        <div>{`(${mockDataCardList.favoriteProjectList.count})`}</div>
      </ProjectCategoryButton>
    </div>
  );
}

export default MyPageCategory;
