import { ProjectListResponse } from "../_apis/schema/projectListResponse";

export interface ProjectListParams {
  page?: number;
  size?: number;
  limit?: number;
  searchString?: string;
  projectTechStacks?: string[];
  sortCondition?: "LIKES" | "VIEWS" | "RECENT";
}

export type ProjectData = ProjectListResponse["content"][0];

export interface GetMyProjectListParams {
  page?: number;
  size?: number;
  userId: number;
}
