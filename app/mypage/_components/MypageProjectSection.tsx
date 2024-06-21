"use client";
import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { ProjectData } from "@/app/_apis/schema/projectResponse";

export type MyPageProjectListType = "myProject" | "wishProject";

function MypageProjectSection({
  projectList,
  projectType,
}: {
  projectList: ProjectData[] | undefined;
  projectType: MyPageProjectListType;
}) {
  const { targetRef: lastCardRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0 });

  useEffect(() => {
    console.log("projectType", projectType);
    console.log("isVisible", isVisible);
  }, [isVisible]);

  return (
    <section>
      <ProjectList projectList={projectList} lastRef={lastCardRef} />
    </section>
  );
}

export default MypageProjectSection;
