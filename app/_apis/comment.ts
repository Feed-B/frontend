import httpClient from "./httpClient";
import { CommentDetailResponse, CommentsListResponse, ReflyCommentResponse } from "./schema/commentResponse";

interface CommentsListRequest {
  projectId: string;
  page?: number;
  size?: number;
  limit?: number;
}

interface ReflyCommentListRequest extends CommentsListRequest {
  commentId: string;
}

export const commentApi = {
  getCommentList: async ({ projectId, page = 1, size = 10, limit = 100 }: CommentsListRequest) => {
    await httpClient().get<CommentsListResponse>(`/${projectId}/commnets`, { page, size, limit });
  },
  getCommentDetail: async (projectId: string, commentId: string) => {
    await httpClient().get<CommentDetailResponse>(`/${projectId}/commnets/${commentId}`);
  },
  getReflyCommentList: async ({ projectId, commentId, page = 1, size = 10, limit = 100 }: ReflyCommentListRequest) => {
    await httpClient().get<ReflyCommentResponse>(`/${projectId}/commnets/${commentId}`, { page, size, limit });
  },
};
