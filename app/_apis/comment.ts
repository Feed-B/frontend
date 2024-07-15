import { HEADER } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import {
  CommentDetailResponse,
  CommentsListResponse,
  MyCommentResponse,
  ReflyCommentResponse,
} from "./schema/commentResponse";

interface CommentsListRequest {
  projectId?: number;
  page?: number;
  size?: number;
}

interface UpadateCommentRequest {
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  comment: string;
}

interface ReflyCommentListRequest extends CommentsListRequest {
  ratingId: number;
}

export const commentApi = {
  getCommentList: async ({ projectId, page = 1, size = 10 }: CommentsListRequest) => {
    return await httpClient().get<CommentsListResponse>(
      `/projects/${projectId}/comments`,
      { page, size },
      HEADER.headers
    );
  },
  getCommentDetail: async (ratingId: number) => {
    return await httpClient().get<CommentDetailResponse>(`/projects/ratings/${ratingId}`);
  },
  getReflyCommentList: async ({ ratingId, page = 1, size = 10 }: ReflyCommentListRequest) => {
    return await httpClient().get<ReflyCommentResponse>(
      `/projects/${ratingId}/comments`,
      {
        page,
        size,
      },
      HEADER.applicationHeaders
    );
  },
  getMyComment: async (projectId: number) => {
    return await httpClient().get<MyCommentResponse>(`/projects/${projectId}/comments/mine`, {}, HEADER.headers);
  },
  postComment: async (projectId: number, rankList: number[], comment: string) => {
    return await httpClient().postData(
      `/projects/${projectId}/comments`,
      {
        ideaRank: rankList[0],
        designRank: rankList[1],
        functionRank: rankList[2],
        completionRank: rankList[3],
        comment: comment,
      },
      HEADER.applicationHeaders
    );
  },
  postReflyComment: async (ratingId: number | undefined, comment: string) => {
    return await httpClient().post(
      `/projects/${ratingId}/comments`,
      {
        parentId: 0,
        comment: comment,
      },
      HEADER.applicationHeaders
    );
  },
  putComment: async (ratingId: number, data: UpadateCommentRequest) => {
    return await httpClient().put(
      `/projects/ratings/${ratingId}`,
      {
        ...data,
      },
      HEADER.applicationHeaders
    );
  },
  putReflyComment: async (commentId: number | undefined, comment: string) => {
    return await httpClient().put(
      `/projects/comments/${commentId}`,
      {
        comment: comment,
      },
      HEADER.applicationHeaders
    );
  },
  deleteComment: async (ratingId: number) => {
    return await httpClient().delete(`/projects/ratings/${ratingId}`, HEADER.applicationHeaders);
  },
  deleteReflyComment: async (reflyId: number) => {
    return await httpClient().delete(`/projects/comments/${reflyId}`, HEADER.applicationHeaders);
  },
};
