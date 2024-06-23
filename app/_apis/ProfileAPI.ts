import httpClient from "./httpClient";

interface CurrentUserIdType {
  id: number;
}

export interface UserProfileType {
  id: number;
  email: string;
  nickName: string;
  aboutMe: string;
  job: JobType;
  imageUrl: string;
}

export interface PutUserProfileType {
  memberEditRequestDto: {
    id: number;
    nickName: string;
    aboutMe: string;
    job: JobType;
  };
  image: File | null;
  imageIdx: ImageIdxType;
}

export type ImageIdxType = 0 | 1 | 2;

export type JobType = "FRONTEND" | "BACKEND" | "DESIGNER" | "ANDROID" | "IOS" | "DEVOPS";

export const profileAPI = {
  getCurrentUserId: async () => {
    return await httpClient().get<CurrentUserIdType>("/profile");
  },
  getUserProfile: async ({ userId }: { userId: number }) => {
    return await httpClient().get<UserProfileType>(`/profile/${userId}`);
  },
  putUserProfile: async ({ userData }: { userData: PutUserProfileType }) => {
    return await httpClient().put(`/profile/${userData.memberEditRequestDto.id}`, { userData });
  },
};
