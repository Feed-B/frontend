import { ProjectListParams } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";
import { ProjectResponse, ProjectResponseType } from "./schema/projectResponse";

// 임시 headers
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MDg0YjU3MyIsImlhdCI6MTcxOTA0MzQ3MywiZXhwIjoxNzE5MDY1MDczfQ.LUi2fBJ7-ys9Fnw0RhINI0_lJx9u6YUcskK9YRtFbms",
  },
};

export const projectApi = {
  getprojectList: async ({
    page = 1,
    size = 12,
    limit = 0,
    searchString = "",
    projectTechStacks = [],
    sortCondition = "RECENT",
  }: ProjectListParams) => {
    return await httpClient().get<ProjectResponseType>("/projects", {
      sortCondition,
      projectTechStacks,
      searchString,
      page,
      size,
      limit,
    });
  },
  getProject: async (projectId: number) => {
    return await httpClient().get<ProjectResponse>(`/projects/${projectId}`, headers.headers);
  },
};
