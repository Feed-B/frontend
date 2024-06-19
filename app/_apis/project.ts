import { ProjectListResponse } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";

interface ProjectListRequest {
  page?: number;
  size?: number;
  limit?: number;
  searchString?: string;
  projectTechStacks?: string[];
}

export const projectApi = {
  getprojectList: async ({ page = 1, size = 1, limit = 1, searchString, projectTechStacks }: ProjectListRequest) => {
    await httpClient().get<ProjectListResponse>("/projects", {
      page,
      size,
      limit,
      searchString,
      projectTechStacks,
    });
  },
};
