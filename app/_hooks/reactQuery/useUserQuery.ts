import { useQuery } from "@tanstack/react-query";
import { profileApi } from "@/app/_apis/userApi";
import { userQueryKey } from "@/app/_queryFactory/userQuery";
import { UserResponse } from "@/app/_apis/schema/userResponse";

// 현재 유저 정보 보기
export const useCurrentUser = (isLoggedIn?: boolean) => {
  const query = useQuery({
    queryKey: userQueryKey.userId().queryKey,
    queryFn: async () => profileApi.getCurrentUserId(),
    enabled: isLoggedIn,
  });
  return query;
};

// 유저 상세 정보 보기
export const useProfileInfo = (userId: number) => {
  const query = useQuery<UserResponse, Error>({
    queryKey: userQueryKey.profile(userId).queryKey,
    queryFn: async () => await profileApi.getUserData(userId),
    enabled: !!userId,
  });
  return query;
};
