import { createQueryKeys } from "@lukemorales/query-key-factory";

export const commentQueryKey = createQueryKeys("comment", {
  list: () => ["commentList"],
  detail: (ratingId: number) => ["commentDetail", ratingId],
  myComment: (ratingId: number) => ["myComment", ratingId],
  refly: () => ["reflyCommentList"],
});
