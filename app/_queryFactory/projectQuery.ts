import { createQueryKeys } from "@lukemorales/query-key-factory";
import { projectApi } from "../_apis/project";

interface projectListParams {
  page?: number;
  size?: number;
  limit?: number;
  search1String?: string;
  projectTechStacks?: string[];
  sortCondition?: string;
}

export const projectQueryKeys = createQueryKeys("project", {
  list: (props: projectListParams) => ({
    queryKey: ["projectList"],
    queryFn: () => projectApi.getprojectList({ ...props }),
  }),
});
