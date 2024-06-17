import httpClient from "./httpClient";
import { CommentDetailResponse, CommentsListResponse, ReflyCommentResponse } from "./schema/commentResponse";

interface CommentsListRequest {
  projectId: number;
  page?: number;
  size?: number;
  limit?: number;
}

interface ReflyCommentListRequest extends CommentsListRequest {
  commentId: number;
}

export const commentApi = {
  getCommentList: async ({ projectId, page = 1, size = 10, limit = 100 }: CommentsListRequest) => {
    await httpClient().get<CommentsListResponse>(`/${projectId}/comments?page=${page}&size=${size}&limit=${limit}`);
  },
  getCommentDetail: async (projectId: string, commentId: string) => {
    await httpClient().get<CommentDetailResponse>(`/projects/${projectId}/comments/${commentId}`);
  },
  getReflyCommentList: async ({ projectId, commentId, page = 1, size = 10, limit = 100 }: ReflyCommentListRequest) => {
    await httpClient().get<ReflyCommentResponse>(
      `/projects/${projectId}/comments/${commentId}/replies?page=${page}&size=${size}&limit=${limit}`
    );
  },
};
