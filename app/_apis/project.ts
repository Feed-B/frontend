import { ProjectListResponse } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";

interface ProjectListRequest {
  page?: number;
  size?: number;
  limit?: number;
  searchString?: string;
  projectTechStacks?: string[];
  sortCondition?: "LIKES" | "VIEWS" | "RECENT";
}

export const projectApi = {
  getprojectList: async ({
    page = 1,
    size = 12,
    limit = 0,
    searchString = "",
    projectTechStacks = [],
    sortCondition = "RECENT",
  }: ProjectListRequest) => {
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
