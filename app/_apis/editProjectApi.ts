import httpClient from "./httpClient";
import { EditProjectResponse } from "./schema/editProjectResponse";

export const editProjectApi = {
  postProject: async (projectData: FormData) => {
    return await httpClient().postFormData("/projects", projectData, headers);
  },
  getProject: async (projectId: number) => {
    return await httpClient().get<EditProjectResponse>(`/projects/${projectId}/edits`, {}, headers);
  },
};

// 임시 headers
export const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqc2JiNTI4QG5hdmVyLmNvbSIsImlhdCI6MTcxOTIwMDk5OSwiZXhwIjoxNzE5MjIyNTk5fQ.eydTUe-9XUGQmkr9By94xe4GcPVZN9SRNI6RssgqjIA",
};
