import { getHeaders } from "../_constants/HeaderToken";
import { CommentListParams, ReflyCommentListParams } from "../_types/CommentListType";
import httpClient from "./httpClient";
import { CommentListResponse } from "./schema/commentListResponse";
import { ReflyCommentResponse } from "./schema/commentResponse";

const HEADER = getHeaders();

export const commentListApi = {
  getCommentList: async ({ projectId, page = 1, size = 8 }: CommentListParams) => {
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
  getReflyCommentList: async ({ ratingId, page = 1, size = 10 }: ReflyCommentListParams) => {
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
};
