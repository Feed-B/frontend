import { createQueryKeys } from "@lukemorales/query-key-factory";

export const commentQueryKey = createQueryKeys("reflyComment", {
  list: () => ["reflyCommentList"],
});
