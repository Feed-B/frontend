import { createQueryKeys } from "@lukemorales/query-key-factory";
import { GetMyProjectListParams, projectListAPI } from "../_apis/projectListAPI";
import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";

export const profileProjectListKeys = createQueryKeys("projectList", {
  profileList: ({ page = 1, size = 16, userId }: GetMyProjectListParams, selectDataType: MyPageProjectListType) => ({
    queryKey: [`${selectDataType}List`, page],
    queryFn: async () =>
      await projectListAPI.getMyProjectList({ page: page, size: size, userId: userId }, selectDataType),
  }),
});
