"use client";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProjectList from "@/app/_components/ProjectList/ProjectList";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import { projectListAPI } from "@/app/_apis/projectListAPI";
import { profileProjectListKeys } from "@/app/_queryFactory/projectListQuery";
import { MY_PAGE_TEXT } from "./constant";

export type MyPageProjectListType = "myProject" | "wishProject";

function MypageProjectSection({
  isMyPage,
  projectType,
  userId,
}: {
  isMyPage: boolean;
  projectType: MyPageProjectListType;
  userId: number;
}) {
  const { targetRef: lastCardRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });
  const projectListQuery = profileProjectListKeys.profileList({ userId: userId }, projectType);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: projectListQuery.queryKey,
    queryFn: ({ pageParam = 1 }) =>
      projectListAPI.getMyProjectList({ page: pageParam, size: 16, userId: userId }, projectType),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1;
      }
      return undefined;
    },
  });

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

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
        <span className="ml-2.5">({data?.pages[0].customPageable.totalElements})</span>
      </h3>
      <ProjectList projectList={data?.pages} lastRef={lastCardRef} />
    </section>
  );
}

export default MypageProjectSection;
