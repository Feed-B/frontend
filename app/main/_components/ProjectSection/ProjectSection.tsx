"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { projectListApi } from "@/app/_apis/projectListApi";
import { useGetStack } from "../../_context/StackProvider";

function ProjectSection() {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });
  const { projectState } = useGetStack();

  const { data, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: projectQueryKey.list().queryKey,
    queryFn: ({ pageParam = 1 }) => projectListApi.getProjectList({ ...projectState, page: pageParam }),

    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });

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
