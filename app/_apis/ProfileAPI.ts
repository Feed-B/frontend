import httpClient from "./httpClient";

interface CurrentUserIdType {
  id: number;
}

export const profileAPI = {
  getCurrentUserId: async () => {
    return await httpClient().get<CurrentUserIdType>("/profile");
  },
};
