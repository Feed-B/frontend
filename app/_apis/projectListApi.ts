import { getHeaders } from "../_constants/HeaderToken";
import { GetMyProjectListParams, ProjectListParams } from "../_types/ProjectListType";
import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";
import httpClient from "./httpClient";
import { ProjectListResponse } from "./schema/projectListResponse";

const HEADER = getHeaders();

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
    return await httpClient().get<ProjectListResponse>(
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
      ["projectList"]
    );
  },

  getMyProjectList: async ({ page, size, userId }: GetMyProjectListParams, selectDataType: MyPageProjectListType) => {
    return await httpClient().get<ProjectListResponse>(
      `/${userId}/projects${selectDataType === "wishProject" ? "/likes" : ""}`,
      {
        page: page,
        size: size,
      },
      HEADER.headers
    );
  },
};
