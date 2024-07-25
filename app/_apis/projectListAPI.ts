import { HEADER } from "../_constants/HeaderToken";
import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";
import httpClient from "./httpClient";
import { ProjectResponseType } from "./schema/projectResponse";

export interface GetMyProjectListParams {
  page?: number;
  size?: number;
  userId: number;
}

export const projectListAPI = {
  getMyProjectList: async (
    { page = 1, size = 24, userId }: GetMyProjectListParams,
    selectDataType: MyPageProjectListType
  ) => {
    return await httpClient().get<ProjectResponseType>(
      `/${userId}/projects${selectDataType === "wishProject" ? "/likes" : ""}`,
      {
        page: page,
        size: size,
      },
      HEADER.headers
    );
  },
};
