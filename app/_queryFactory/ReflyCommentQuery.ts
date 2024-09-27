import { createQueryKeys } from "@lukemorales/query-key-factory";

export const reflyCommentQueryKey = createQueryKeys("reflyComment", {
  list: () => ["reflyCommentList"],
});
