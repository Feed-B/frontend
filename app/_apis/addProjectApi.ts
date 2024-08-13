import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";

export const addProjectApi = {
  postProject: async (projectData: FormData) => {
    const HEADER = getHeaders();
    return await httpClient().postFormData("/projects", projectData, HEADER.headers);
  },
};
