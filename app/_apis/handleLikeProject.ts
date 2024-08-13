import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";

export const handleLikeProject = {
  postLikeProject: async ({ projectId }: { projectId: number }) => {
    const HEADER = getHeaders();
    return await httpClient().post(`/projects/${projectId}/like`, { "": "" }, HEADER.headers);
  },
  deleteLikeProject: async ({ projectId }: { projectId: number }) => {
    const HEADER = getHeaders();
    return await httpClient().delete(`/projects/${projectId}/unlike`, HEADER.headers);
  },
};
