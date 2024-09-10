import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, dehydrate } from "@tanstack/react-query";
import { projectApi } from "../_apis/project";
import { ProjectListParams } from "../_types/ProjectListDataType";
import getQueryClient from "./getQueryClient";

export const projectQueryKeys = createQueryKeys("project", {
  list: (props: ProjectListParams, token?: string) => ({
    queryKey: ["projectList"],
    queryFn: async () => await projectApi.getProjectList({ ...props }, token),
  }),
  detail: (projectId: number) => ({
    queryKey: ["projectDetail"],
    queryFn: async () => await projectApi.getProject(projectId),
  }),
  teamMember: (projectId: number) => ({
    queryKey: ["teamMember"],
    queryFn: async () => await projectApi.getTeamMember(projectId),
  }),
  totalRating: (projectId: number) => ({
    queryKey: ["totalRating"],
    queryFn: async () => await projectApi.getTotalRating(projectId),
  }),
});

//프로젝트 키는 이렇게 바꿀겁니다
export const newProjectQueryKeys = createQueryKeys("project", {
  list: (props: ProjectListParams) => ["projectList", props],
});

// 이렇게 프리페칭 코드를 작성하고 훅으로 따로 뺄겁니다
export const usePrefetchQuery = async (params: ProjectListParams) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: newProjectQueryKeys.list(params).queryKey,
    queryFn: ({ pageParam = 1 }) => projectApi.getProjectList({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};

export const useFetchNovelContainerQuery = (params: ProjectListParams) => {
  return useInfiniteQuery({
    queryKey: newProjectQueryKeys.list(params).queryKey,
    queryFn: ({ pageParam = 1 }) => projectApi.getProjectList({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1;
      }
      return undefined;
    },
  });
};
