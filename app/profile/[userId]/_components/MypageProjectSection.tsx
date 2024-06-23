"use client";
import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { ProjectResponseType } from "@/app/_apis/schema/projectResponse";

export type MyPageProjectListType = "myProject" | "wishProject";

function MypageProjectSection({
  projectList,
  projectType,
}: {
  projectList: ProjectResponseType[];
  projectType: MyPageProjectListType;
}) {
  const { targetRef: lastCardRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });

  useEffect(() => {
    console.log("projectType", projectType);
    console.log("isVisible", isVisible);
  }, [isVisible, projectType]);

  return (
    <section>
      <ProjectList projectList={projectList} lastRef={lastCardRef} />
    </section>
  );
}

export default MypageProjectSection;
