import { getHeaders } from "../_constants/HeaderToken";
import { UpadateCommentParams, UploadCommentParams } from "../_types/CommentType";
import httpClient from "./httpClient";
import { CommentResponse, MyCommentResponse } from "./schema/commentResponse";

const HEADER = getHeaders();

export const commentApi = {
  getComment: async (ratingId: number) => {
    return await httpClient().get<CommentResponse>(`/projects/ratings/${ratingId}`, {}, HEADER.headers, [
      "commentDetail",
    ]);
  },
  getMyComment: async (projectId: number) => {
    return await httpClient().get<MyCommentResponse>(`/projects/${projectId}/ratings/mine`, {}, HEADER.headers, [
      "myComment",
    ]);
  },
  postComment: async (projectId: number, data: UploadCommentParams) => {
    return await httpClient().postData(
      `/projects/${projectId}/ratings`,
      {
        ...data,
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
  putComment: async (ratingId: number, data: UpadateCommentParams) => {
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
