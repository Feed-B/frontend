"use client";
import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { ProjectData } from "@/app/_apis/projectListAPI";

export type MyPageProjectListType = "myProject" | "wishProject";

function MypageProjectSection({
  projectList,
  projectType,
}: {
  projectList: ProjectData[] | undefined;
  projectType: MyPageProjectListType;
}) {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });

  useEffect(() => {
    console.log("projectType", projectType);
    console.log("isVisible", isVisible);
  }, [isVisible, projectType]);

  return (
    <section>
      <ProjectList projectList={projectList} lastRef={lastCardInfo} />
    </section>
  );
}

export default MypageProjectSection;
