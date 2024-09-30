import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { projectListApi } from "@/app/_apis/projectListApi";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { MyPageProjectListType } from "@/app/profile/[userId]/_components/MypageProjectSection";
import type { projectStateType } from "@/app/main/_context/StackProvider";

// 프로젝트 리스트 조회
export const useProjectList = (projectState : projectStateType) => {
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

// 프로젝트 내용 조회



// 나의 프로젝트, 찜 리스트 조회
export const useMyProjectList = (userId: number, selectDataType: MyPageProjectListType
) => {
  const query = useSuspenseInfiniteQuery({
    queryKey: selectDataType === "myProject" ? projectQueryKey.myProject().queryKey : projectQueryKey.likeProject().queryKey, 
    queryFn: async ({ pageParam = 1 }) => {
      return projectListApi.getMyProjectList(
        { page: pageParam, size: 16, userId }, 
        selectDataType
      );
    },
    getNextPageParam: (lastPage) => {
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
