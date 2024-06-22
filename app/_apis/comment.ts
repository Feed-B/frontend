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
    return await httpClient().get<CommentsListResponse>(`/${projectId}/comments`, { page, size, limit });
  },
  getCommentDetail: async (projectId: number, commentId: number) => {
    return await httpClient().get<CommentDetailResponse>(`/projects/${projectId}/comments/${commentId}`);
  },
  getReflyCommentList: async ({ projectId, commentId, page = 1, size = 10, limit = 100 }: ReflyCommentListRequest) => {
    return await httpClient().get<ReflyCommentResponse>(`/${projectId}/comments/${commentId}`, { page, size, limit });
  },
};
