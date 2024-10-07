import { useQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { projectListApi } from "@/app/_apis/projectListApi";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { MyPageProjectListType } from "@/app/profile/[userId]/_components/MypageProjectSection";
import { editProjectApi, projectApi } from "@/app/_apis/projectApi";
import {
  EditProjectResponse,
  ProjectResponse,
  TeamMemberResponse,
  TotalRatingResponse,
} from "@/app/_apis/schema/projectResponse";
import type { projectStateType } from "@/app/main/_context/StackProvider";

/** 프로젝트 리스트 */
// 전체 프로젝트 리스트 조회
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

// 나의 프로젝트, 찜한 프로젝트 리스트 조회
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
  const query = useQuery<ProjectResponse, Error>({
    queryKey: projectQueryKey.detail(projectId).queryKey,
    queryFn: async () => await projectApi.getProject(projectId),
  });
  return query;
};

/** 프로젝트 세부 정보 */
// 프로젝트 수정을 위한 데이터 조회
export const useGetEditProject = (projectId: number) => {
  const query = useQuery<EditProjectResponse, Error>({
    queryKey: projectQueryKey.edit().queryKey,
    queryFn: async () => await editProjectApi.getProject(projectId),
  });
  return query;
};

// 프로젝트 팀원 목록 조회
export const useProjectTeamMember = (projectId: number) => {
  const query = useQuery<TeamMemberResponse, Error>({
    queryKey: projectQueryKey.teamMember(projectId).queryKey,
    queryFn: async () => await projectApi.getTeamMember(projectId),
  });
  return query;
};

// 프로젝트 별점 항목들 각 각의 평균 조회
export const useProjectAverageRating = (projectId: number) => {
  const query = useQuery<TotalRatingResponse, Error>({
    queryKey: projectQueryKey.averageRating(projectId).queryKey,
    queryFn: async () => await projectApi.getTotalRating(projectId),
  });
  return query;
};
