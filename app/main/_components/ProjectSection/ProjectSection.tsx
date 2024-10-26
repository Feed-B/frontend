"use client";

import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { useProjectList } from "@/app/_hooks/reactQuery/useProjectQuery";
import { useGetStack } from "../../_context/StackProvider";

function ProjectSection() {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });
  const { projectState } = useGetStack();
  const { data, fetchNextPage } = useProjectList(projectState);

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section className="col-start-2 mt-10">
      <ProjectList projectList={data.pages} lastRef={lastCardInfo} />
    </section>
  );
}

export default ProjectSection;
