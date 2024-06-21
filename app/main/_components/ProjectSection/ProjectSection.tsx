"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { useGetStack } from "../../_context/StackProvider";

function ProjectSection() {
  const { projectState } = useGetStack();
  const { data } = useQuery(projectQueryKeys.list(projectState));

  if (!data) {
    return <section className="col-start-2 mt-10">로딩 중...</section>;
  }

  return (
    <section className="col-start-2 mt-10">
      <ProjectList projectList={data} />
    </section>
  );
}

export default ProjectSection;
