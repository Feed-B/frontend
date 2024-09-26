import { getHeaders } from "../_constants/HeaderToken";
import { ProjectListParams } from "../_types/ProjectListDataType";
import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";
import httpClient from "./httpClient";
import { ProjectResponseType } from "./schema/projectResponse";

export interface GetMyProjectListParams {
  page?: number;
  size?: number;
  userId: number;
}

export const projectListApi = {
  getProjectList: async (
    {
      page = 1,
      size = 12,
      limit = 0,
      searchString = "",
      projectTechStacks = [],
      sortCondition = "RECENT",
    }: ProjectListParams,
    token?: string
  ) => {
    const applicationHeaders = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
    return await httpClient().get<ProjectResponseType>(
      "/projects",
      {
        sortCondition,
        projectTechStacks,
        searchString,
        page,
        size,
        limit,
      },
      applicationHeaders,
      ["pojectList"]
    );
  },

  getMyProjectList: async ({ page, size, userId }: GetMyProjectListParams, selectDataType: MyPageProjectListType) => {
    const HEADER = getHeaders();
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
