"use client";
import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { ProjectResponseType } from "@/app/_apis/schema/projectResponse";
import { MY_PAGE_TEXT } from "./constant";

export type MyPageProjectListType = "myProject" | "wishProject";

function MypageProjectSection({
  isMyPage,
  projectList,
  projectType,
}: {
  isMyPage: boolean;
  projectList: ProjectResponseType;
  projectType: MyPageProjectListType;
}) {
  const { targetRef: lastCardRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible, projectType]);

  const listTitle = (isMyPage: boolean, projectType: MyPageProjectListType) => {
    if (projectType === "myProject") {
      return isMyPage ? MY_PAGE_TEXT.MY_PROJECT : MY_PAGE_TEXT.PROJECT;
    } else {
      return MY_PAGE_TEXT.WISH_PROJECT;
    }
  };

  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold leading-relaxed text-gray-900">
        {listTitle(isMyPage, projectType)}
        <span className="ml-2.5">{`(${projectList.customPageable.totalElements})`}</span>
      </h3>
      <ProjectList projectList={projectList.content} lastRef={lastCardRef} />
    </section>
  );
}

export default MypageProjectSection;
