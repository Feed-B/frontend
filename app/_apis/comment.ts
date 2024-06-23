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
  getCommentList: async ({ projectId, page = 1, size = 10 }: CommentsListRequest) => {
    return await httpClient().get<CommentsListResponse>(`/${projectId}/comments`, { page, size });
  },
  getCommentDetail: async (projectId: number, commentId: number) => {
    return await httpClient().get<CommentDetailResponse>(`/projects/${projectId}/comments/${commentId}`);
  },
  getReflyCommentList: async ({ projectId, commentId, page = 1, size = 10 }: ReflyCommentListRequest) => {
    return await httpClient().get<ReflyCommentResponse>(`/projects/${projectId}/comments/${commentId}/replies`, {
      page,
      size,
    });
  },
  PostReflyComment: async (projectId: number, commentId: number, comment: string) => {
    return await httpClient().post(`/projects/${projectId}/comments`, {
      ideaRank: 5,
      designRank: 5,
      functionRank: 5,
      completionRank: 5,
      commentRequest: {
        parentId: commentId,
        comment: comment,
      },
    });
  },
};
