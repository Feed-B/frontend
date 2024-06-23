import httpClient from "./httpClient";
import { headers } from "./projectListAPI";

export const handleLikeProject = {
  postLikeProject: async ({ projectId }: { projectId: number }) => {
    return await httpClient().post(`/project/${projectId}/like`, { "": "" }, headers.headers);
  },
  deleteLikeProject: async ({ projectId }: { projectId: number }) => {
    return await httpClient().delete(`/project/${projectId}/unlike`, headers.headers);
  },
};
