import { ProjectListParams } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";
import { ProjectResponseType } from "./schema/projectResponse";

export const projectApi = {
  getProjectList: async ({
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
};
