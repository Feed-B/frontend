export interface ProjectListParams {
  page?: number;
  size?: number;
  limit?: number;
  searchString?: string;
  projectTechStacks?: string[];
  sortCondition?: "LIKES" | "VIEWS" | "RECENT";
}
