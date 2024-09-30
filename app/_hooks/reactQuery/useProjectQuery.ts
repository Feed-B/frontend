import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { projectListApi } from "@/app/_apis/projectListApi";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { MyPageProjectListType } from "@/app/profile/[userId]/_components/MypageProjectSection";

// 프로젝트 리스트 조회

// 프로젝트 내용 조회



// 나의 프로젝트 리스트 조회
export const useMyProjectList = (userId: number, selectDataType: MyPageProjectListType
) => {
  const query = useSuspenseInfiniteQuery({
    queryKey: projectQueryKey.myProject().queryKey, 
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


// 나의 프로젝트 찜 리스트 조회
