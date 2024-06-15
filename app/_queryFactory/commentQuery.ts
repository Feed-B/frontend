import { createQueryKeys } from "@lukemorales/query-key-factory";
import { commentApi } from "../_apis/comment";

interface CommentListParams {
  projectId: string;
  page?: number;
  size?: number;
  limit?: number;
}

interface ReflyCommentListParams extends CommentListParams {
  commentId: string;
}

export const commentQueryKeys = createQueryKeys("comment", {
  list: (props: CommentListParams) => ({
    queryKey: ["commentList", props.page],
    queryFn: () => commentApi.getCommentList({ ...props }),
  }),
  detail: (projectId: string, commentId: string) => ({
    queryKey: ["comment", commentId],
    queryFn: () => commentApi.getCommentDetail(projectId, commentId),
  }),
  reflyList: (props: ReflyCommentListParams) => ({
    queryKey: ["reflyCommentList", props.page],
    queryFn: () => commentApi.getReflyCommentList({ ...props }),
  }),
});
