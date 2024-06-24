import { HEADER } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import {
  CommentDetailResponse,
  CommentsListResponse,
  MyCommentResponse,
  ReflyCommentResponse,
} from "./schema/commentResponse";

interface CommentsListRequest {
  projectId: number;
  page?: number;
  size?: number;
}

interface UpadateCommentRequest {
  comment: string;
  projectRatingUpdateRequest: {
    projectRatingId: number;
    ideaRank: number;
    designRank: number;
    functionRank: number;
    completionRank: number;
    commentUpdateRequest: string;
  };
}

interface ReflyCommentListRequest extends CommentsListRequest {
  commentId: number;
}

export const commentApi = {
  getCommentList: async ({ projectId, page = 1, size = 10 }: CommentsListRequest) => {
    return await httpClient().get<CommentsListResponse>(
      `/projects/${projectId}/comments`,
      { page, size },
      HEADER.headers
    );
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
  getMyComment: async (projectId: number) => {
    return await httpClient().get<MyCommentResponse>(`/projects/${projectId}/comments/mine`, {}, HEADER.headers);
  },
  postComment: async (projectId: number, rankList: number[], comment: string) => {
    return await httpClient().post(`/projects/${projectId}/comments`, {
      ideaRank: rankList[0],
      designRank: rankList[1],
      functionRank: rankList[2],
      completionRank: rankList[3],
      comment: comment,
    });
  },
  postReflyComment: async (projectId: number, commentId: number, comment: string) => {
    return await httpClient().post(
      `/projects/${projectId}/comments/replies`,
      {
        parentId: commentId,
        comment: comment,
      },
      HEADER.applicationHeaders
    );
  },
  putComment: async (commentId: number, data: UpadateCommentRequest) => {
    return await httpClient().put(`/projects/${commentId}`, {
      data,
    });
  },
  deleteComment: async (commentId: number) => {
    return await httpClient().delete(`/projects/comments/${commentId}`);
  },
};
