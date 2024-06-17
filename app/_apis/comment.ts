import httpClient from "./httpClient";
import { CommentDetailResponse, CommentsListResponse, ReflyCommentResponse } from "./schema/commentResponse";

export const commentApi = {
  getCommentList: async (projectId: number, page = 1, size = 10, limit = 100) => {
    await httpClient().get<CommentsListResponse>(`/${projectId}/comments?page=${page}&size=${size}&limit=${limit}`);
  },
  getCommentDetail: async (projectId: string, commentId: string) => {
    await httpClient().get<CommentDetailResponse>(`/projects/${projectId}/comments/${commentId}`);
  },
  getReflyCommentList: async (projectId: number, commentId: number, page = 1, size = 10, limit = 100) => {
    await httpClient().get<ReflyCommentResponse>(
      `/projects/${projectId}/comments/${commentId}/replies?page=${page}&size=${size}&limit=${limit}`
    );
  },
};
