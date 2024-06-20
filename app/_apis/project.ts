import { ProjectListResponse } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";

interface ProjectListRequest {
  page?: number;
  size?: number;
  limit?: number;
  searchString?: string;
  projectTechStacks?: string[];
  sortCondition?: string;
}

export const projectApi = {
  getprojectList: async ({
    page = 0,
    size = 0,
    limit = 0,
    searchString = "",
    projectTechStacks = [],
    sortCondition = "RECENT",
  }: ProjectListRequest) => {
    await httpClient().get<ProjectListResponse>("/projects?", {
      sortCondition,
      projectTechStacks,
      searchString,
      page,
      size,
      limit,
    });
  },
};
