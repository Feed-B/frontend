import { createQueryKeys } from "@lukemorales/query-key-factory";
import { projectListApi } from "../_apis/projectListApi";
import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";
import { GetMyProjectListParams } from "../_types/ProjectListType";

export const profileProjectListKeys = createQueryKeys("projectList", {
  profileList: ({ page, size, userId }: GetMyProjectListParams, selectDataType: MyPageProjectListType) => ({
    queryKey: [`${selectDataType}List`, page],
    queryFn: async () =>
      await projectListApi.getMyProjectList({ page: page, size: size, userId: userId }, selectDataType),
  }),
});

export const NewProjectListKeys = createQueryKeys("project", {
  profileList: ({ page, size, userId }: GetMyProjectListParams, selectDataType: MyPageProjectListType) => ({
    queryKey: [`${selectDataType}List`, page],
    queryFn: async () =>
      await projectListApi.getMyProjectList({ page: page, size: size, userId: userId }, selectDataType),
  }),
});
