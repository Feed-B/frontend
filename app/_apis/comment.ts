import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import {
  CommentDetailResponse,
  CommentListResponse,
  MyCommentResponse,
  ReflyCommentResponse,
} from "./schema/commentResponse";

interface CommentListRequest {
  projectId?: number;
  page?: number;
  size?: number;
}

interface UploadCommentRequest {
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  comment: string;
}

interface UpadateCommentRequest {
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  comment: string;
}

interface ReflyCommentListRequest extends CommentListRequest {
  ratingId: number;
}

export const commentApi = {
  getCommentList: async ({ projectId, page = 1, size = 8 }: CommentListRequest) => {
    const HEADER = getHeaders();
    return await httpClient().get<CommentListResponse>(
      `/projects/${projectId}/ratings`,
      {
        page,
        size,
      },
      HEADER.headers,
      ["commentList"]
    );
  },
  getCommentDetail: async (ratingId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<CommentDetailResponse>(`/projects/ratings/${ratingId}`, {}, HEADER.headers, [
      "commentDetail",
    ]);
  },
  getReflyCommentList: async ({ ratingId, page = 1, size = 10 }: ReflyCommentListRequest) => {
    const HEADER = getHeaders();
    return await httpClient().get<ReflyCommentResponse>(
      `/projects/${ratingId}/comments`,
      {
        page,
        size,
      },
      HEADER.applicationHeaders,
      ["reflyCommentList"]
    );
  },
  getMyComment: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<MyCommentResponse>(`/projects/${projectId}/ratings/mine`, {}, HEADER.headers, [
      "myComment",
    ]);
  },
  postComment: async (projectId: number, data: UploadCommentRequest) => {
    const HEADER = getHeaders();
    return await httpClient().postData(
      `/projects/${projectId}/ratings`,
      {
        ...data,
      },
      HEADER.applicationHeaders
    );
  },
  postReflyComment: async (ratingId: number | undefined, comment: string) => {
    const HEADER = getHeaders();
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
    const HEADER = getHeaders();
    return await httpClient().put(
      `/projects/ratings/${ratingId}`,
      {
        ...data,
      },
      HEADER.applicationHeaders
    );
  },
  putReflyComment: async (commentId: number | undefined, comment: string) => {
    const HEADER = getHeaders();
    return await httpClient().put(
      `/projects/comments/${commentId}`,
      {
        comment: comment,
      },
      HEADER.applicationHeaders
    );
  },
  deleteComment: async (ratingId: number) => {
    const HEADER = getHeaders();
    return await httpClient().delete(`/projects/ratings/${ratingId}`, HEADER.applicationHeaders);
  },
  deleteReflyComment: async (reflyId: number) => {
    const HEADER = getHeaders();
    return await httpClient().delete(`/projects/comments/${reflyId}`, HEADER.applicationHeaders);
  },
};
