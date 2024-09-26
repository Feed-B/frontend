import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import { SignUpRequest, SignUpResponse } from "./schema/user";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface CurrentUserIdType {
  id: number;
}

export interface UserDataType {
  id: number;
  email: string;
  nickName: string;
  aboutMe: string;
  job: JobType;
  imageUrl: string;
}

export interface PutUserDataType {
  memberEditRequestDto: {
    id: number;
    nickName: string;
    aboutMe: string;
    job: JobType;
  };
  image: File | null;
  imageIdx: ImageIndexType;
}

export type ImageIndexType = 0 | 1 | 2;

export type JobType = "FRONTEND" | "BACKEND" | "DESIGNER" | "ANDROID" | "IOS" | "DEVOPS";

export const signUpApi = {
  postSignUp: async (userData: SignUpRequest): Promise<SignUpResponse> => {
    return await httpClient().post<SignUpResponse, SignUpRequest>("/signUp", userData);
  },
};

export const profileApi = {
  getCurrentUserId: async () => {
    const HEADER = getHeaders();
    return await httpClient().get<CurrentUserIdType>("/profile", {}, HEADER.headers);
  },
  getUserData: async (userId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<UserDataType>(`/profile/${userId}`, { "": "" }, HEADER.headers);
  },
  putUserData: async ({ userId, userData }: { userId: number; userData: PutUserDataType }) => {
    const formData = new FormData();
    const HEADER = getHeaders();

    const memberEditRequestDtoBlob = new Blob([JSON.stringify(userData.memberEditRequestDto)], {
      type: "application/json",
    });
    formData.append("memberEditRequestDto", memberEditRequestDtoBlob);

    if (userData.image) {
      formData.append("image", userData.image);
    }
    formData.append("imageIdx", userData.imageIdx.toString());

    try {
      const response = await fetch(`${BASE_URL}/profile/${userId}`, {
        method: "PUT",
        body: formData,
        headers: HEADER.headers,
      });

      if (!response.ok) {
        throw new Error("Error updating profile: " + response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  },
};
