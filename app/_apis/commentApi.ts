import { getHeaders } from "../_constants/HeaderToken";
import { UpadateCommentParams, UploadCommentParams } from "../_types/CommentType";
import httpClient from "./httpClient";
import { CommentResponse, MyCommentResponse } from "./schema/commentResponse";

export const commentApi = {
  getComment: async (ratingId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<CommentResponse>(`/projects/ratings/${ratingId}`, {}, HEADER.headers, [
      "commentDetail",
    ]);
  },
  getMyComment: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<MyCommentResponse>(`/projects/${projectId}/ratings/mine`, {}, HEADER.headers, [
      "myComment",
    ]);
  },
  postComment: async (projectId: number, data: UploadCommentParams) => {
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
  putComment: async (ratingId: number, data: UpadateCommentParams) => {
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
