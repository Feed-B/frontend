"use client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";
import { projectListApi } from "@/app/_apis/projectListApi";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { MyPageProjectListType } from "@/app/profile/[userId]/_components/MypageProjectSection";
import { projectApi } from "@/app/_apis/projectApi";
import type { projectStateType } from "@/app/main/_context/StackProvider";

// 프로젝트 리스트 조회
export const useProjectList = (projectState: projectStateType) => {
  const query = useSuspenseInfiniteQuery({
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
  return query;
};

// 나의 프로젝트, 찜 리스트 조회
export const useMyProjectList = (userId: number, selectDataType: MyPageProjectListType) => {
  const query = useSuspenseInfiniteQuery({
    queryKey:
      selectDataType === "myProject" ? projectQueryKey.myProject().queryKey : projectQueryKey.likeProject().queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      return projectListApi.getMyProjectList({ page: pageParam, size: 16, userId }, selectDataType);
    },
    getNextPageParam: lastPage => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  return query;
};

// 프로젝트 내용 조회
export const useProjectDetail = (projectId: number) => {
  const query = useQuery({
    queryKey: projectQueryKey.detail(projectId).queryKey,
    queryFn: async () => await projectApi.getProject(projectId),
  });
  return query;
};

/** 프로젝트 세부 정보 */
// 프로젝트 팀원 목록 조회
export const useProjectTeamMember = () => {};

// 프로젝트 좋아요 누른 횟수가 제일 많은 3개 조회
export const useTopRatingProject = () => {};

// 프로젝트에 수정 페이지를 위한 데이터 조회
export const useEditProject = () => {};

// 프로젝트 별점 항목들 각 각의 평균 조회
export const useProjectAverageRating = () => {};

/** 프로젝트 별점 관련 */
// 프로젝트에 남긴 별점 상세 조회
export const useProjectRating = () => {};

// 프로젝트에 남긴 별점 목록 조회
export const useWriteRatingList = () => {};

// 프로젝트에 달린 나의 별점 조회
export const useMyRating = () => {};
