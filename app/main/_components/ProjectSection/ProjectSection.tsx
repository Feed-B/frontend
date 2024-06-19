import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { myProjectList } from "@/app/_components/ProjectList/mockDataCardList";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { useGetStack } from "../../_context/StackProvider";

function ProjectSection() {
  const { projectState } = useGetStack();

  const { data } = useQuery(projectQueryKeys.list(projectState));

  console.log(data);

  return (
    <section className="col-start-2 mt-[40px]">
      <ProjectList projectList={myProjectList.data} />
    </section>
  );
}

export default ProjectSection;
