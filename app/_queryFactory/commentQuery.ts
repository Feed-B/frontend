import { createQueryKeys } from "@lukemorales/query-key-factory";
import { commentApi } from "../_apis/comment";

interface CommentListParams {
  projectId: number;
  page?: number;
  size?: number;
}

interface ReflyCommentListParams extends CommentListParams {
  commentId: number;
}

export const commentQueryKeys = createQueryKeys("comment", {
  list: (props: CommentListParams) => ({
    queryKey: ["commentList", props.page],
    queryFn: async () => await commentApi.getCommentList({ ...props }),
  }),
  detail: (projectId: number, commentId: number) => ({
    queryKey: ["commentData", commentId],
    queryFn: async () => await commentApi.getCommentDetail(projectId, commentId),
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
