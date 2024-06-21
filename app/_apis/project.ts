import { ProjectListParams, ProjectListResponse } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";

export const projectApi = {
  getprojectList: async ({
    page = 1,
    size = 12,
    limit = 0,
    searchString = "",
    projectTechStacks = [],
    sortCondition = "RECENT",
  }: ProjectListParams) => {
    return await httpClient().get<ProjectListResponse>("/projects?", {
      sortCondition,
      projectTechStacks,
      searchString,
      page,
      size,
      limit,
    });
  },
};
