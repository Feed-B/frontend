import { createQueryKeys } from "@lukemorales/query-key-factory";
import { projectApi } from "../_apis/project";

interface projectListParams {
  page?: number;
  size?: number;
  limit?: number;
  searchString?: string;
  projectTechStacks?: string[];
}

export const projectQueryKeys = createQueryKeys("project", {
  list: (props: projectListParams) => ({
    queryKey: ["projectList", props.page],
    queryFn: () => projectApi.getprojectList({ ...props }),
  }),
});
