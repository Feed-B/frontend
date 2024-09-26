import { createQueryKeys } from "@lukemorales/query-key-factory";
import { editProjectApi } from "../_apis/projectApi";

export const editProjectQueryKeys = createQueryKeys("editProject", {
  detail: (projectId: number) => ({
    queryKey: ["editProjectDetail"],
    queryFn: async () => await editProjectApi.getProject(projectId),
  }),
});
