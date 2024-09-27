import { createQueryKeys } from "@lukemorales/query-key-factory";

export const userQueryKey = createQueryKeys("user", {
  userId: () => ["userId"],
  profile: (userId: number) => ["profile", userId],
});
