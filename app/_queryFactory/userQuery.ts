import { createQueryKeys } from "@lukemorales/query-key-factory";
import { profileApi } from "../_apis/userApi";

export const userQueryKeys = createQueryKeys("user", {
  userId: () => ({
    queryKey: ["id"],
    queryFn: () => profileApi.getCurrentUserId(),
  }),
  detail: (userId: number) => ({
    queryKey: ["profile"],
    queryFn: () => profileApi.getUserData(userId),
  }),
});

export const userQueryKey = createQueryKeys("user", {
  userId: () => ["userId"],
  profile: (userId: number) => ["profile", userId],
});
