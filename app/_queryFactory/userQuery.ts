import { createQueryKeys } from "@lukemorales/query-key-factory";
import { profileAPI } from "../_apis/ProfileAPI";

export const userQueryKeys = createQueryKeys("user", {
  userId: () => ({
    queryKey: ["id"],
    queryFn: () => profileAPI.getCurrentUserId(),
  }),
  detail: (userId: number) => ({
    queryKey: ["profile"],
    queryFn: () => profileAPI.getUserData(userId),
  }),
});
