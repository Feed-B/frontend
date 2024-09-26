import { createQueryKeys } from "@lukemorales/query-key-factory";
import { commentApi } from "../_apis/commentApi";

interface CommentListParams {
  projectId?: number;
  page?: number;
  size?: number;
}

interface ReflyCommentListParams extends CommentListParams {
  ratingId: number;
}

export const commentQueryKeys = createQueryKeys("comment", {
  list: (props: CommentListParams) => ({
    queryKey: ["commentList", props.page],
    queryFn: async () => await commentApi.getCommentList({ ...props }),
  }),
  detail: (ratingId: number) => ({
    queryKey: ["commentData", ratingId],
    queryFn: async () => await commentApi.getCommentDetail(ratingId),
  }),
  reflyList: (props: ReflyCommentListParams) => ({
    queryKey: ["reflyCommentList"],
    queryFn: async () => await commentApi.getReflyCommentList({ ...props }),
  }),
  myComment: (projectId: number) => ({
    queryKey: ["myComment"],
    queryFn: async () => await commentApi.getMyComment(projectId),
  }),
});
