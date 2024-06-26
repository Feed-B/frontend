import { createQueryKeys } from "@lukemorales/query-key-factory";
import { editProjectApi } from "../_apis/editProjectApi";

export const editProjectQueryKeys = createQueryKeys("editProject", {
  detail: (projectId: number) => ({
    queryKey: ["editProjectDetail"],
    queryFn: async () => await editProjectApi.getProject(projectId),
  }),
});
