import { HEADER } from "@/app/_constants/HeaderToken";
import httpClient from "./httpClient";
import { EditProjectResponse } from "./schema/editProjectResponse";

export const editProjectApi = {
  postProject: async (projectData: FormData) => {
    return await httpClient().postFormData("/projects", projectData, HEADER.headers);
  },
  getProject: async (projectId: number) => {
    return await httpClient().get<EditProjectResponse>(`/projects/${projectId}/edits`, {}, HEADER.headers);
  },
};
