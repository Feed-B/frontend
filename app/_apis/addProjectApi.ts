import httpClient from "./httpClient";

export const addProjectApi = {
  postProject: async (projectData: FormData) => {
    return await httpClient().postFormData<FormData>("/projects", projectData);
  },
};
