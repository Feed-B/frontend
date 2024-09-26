import { createQueryKeys } from "@lukemorales/query-key-factory";
import { commentApi } from "../_apis/commentApi";
import { commentListApi } from "../_apis/commentListApi";

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
    queryFn: async () => await commentListApi.getCommentList({ ...props }),
  }),
  detail: (ratingId: number) => ({
    queryKey: ["commentData", ratingId],
    queryFn: async () => await commentApi.getComment(ratingId),
  }),
  reflyList: (props: ReflyCommentListParams) => ({
    queryKey: ["reflyCommentList"],
    queryFn: async () => await commentListApi.getReflyCommentList({ ...props }),
  }),
  myComment: (projectId: number) => ({
    queryKey: ["myComment"],
    queryFn: async () => await commentApi.getMyComment(projectId),
  }),
});
