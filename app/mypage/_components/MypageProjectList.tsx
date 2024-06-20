"use client";
import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { ProjectListResponse } from "@/app/_types/ProjectListDataType";

export type MyPageProjectListType = "myProject" | "wishProject";

function MypageProjectList({
  projectList,
  projectType,
}: {
  projectList: ProjectListResponse[];
  projectType: MyPageProjectListType;
}) {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });

  useEffect(() => {
    console.log("projectType", projectType);
    console.log("isVisible", isVisible);
  }, [isVisible, projectType]);

  return (
    <>
      <ProjectList projectList={projectList} lastRef={lastCardInfo} />
    </>
  );
}

export default MypageProjectList;
