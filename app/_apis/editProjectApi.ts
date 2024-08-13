import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import { EditProjectResponse } from "./schema/editProjectResponse";

export const editProjectApi = {
  putProject: async (projectId: number, projectData: FormData) => {
    const HEADER = getHeaders();
    return await httpClient().putFormData(`/projects/${projectId}`, projectData, HEADER.headers);
  },
  getProject: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<EditProjectResponse>(`/projects/${projectId}/edits`, {}, HEADER.headers);
  },
};
