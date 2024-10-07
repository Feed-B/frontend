"use client";
import { useQuery } from "react-query";
import { profileApi } from "@/app/_apis/userApi";
import { userQueryKey } from "@/app/_queryFactory/userQuery";

// 현재 유저 정보 보기
export const useCurrentUser = (isLoggedIn: boolean) => {
  const query = useQuery({
    queryKey: userQueryKey.userId().queryKey,
    queryFn: async () => profileApi.getCurrentUserId(),
    enabled: isLoggedIn,
  });
  return query;
};
