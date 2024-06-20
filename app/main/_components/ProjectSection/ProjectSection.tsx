"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { myProjectList } from "@/app/_components/ProjectList/mockDataCardList";
import { projectApi } from "@/app/_apis/project";
import { useGetStack } from "../../_context/StackProvider";

function ProjectSection() {
  const { projectState } = useGetStack();

  console.log(projectState);

  const { data } = useQuery({
    queryKey: ["project", "list", "projectList"],
    queryFn: () => projectApi.getprojectList(projectState),
  });

  console.log(data);

  return (
    <section className="col-start-2 mt-[40px]">
      <ProjectList projectList={myProjectList.data} />
    </section>
  );
}

export default ProjectSection;
