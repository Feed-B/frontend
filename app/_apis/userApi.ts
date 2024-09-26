import { getHeaders } from "../_constants/HeaderToken";
import { UserDataParams } from "../_types/UserType";
import httpClient from "./httpClient";
import { SignUpRequest, SignUpResponse, UserIdResponse, UserResponse } from "./schema/userResponse";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const signUpApi = {
  postSignUp: async (userData: SignUpRequest): Promise<SignUpResponse> => {
    return await httpClient().post<SignUpResponse, SignUpRequest>("/signUp", userData);
  },
};

export const profileApi = {
  getCurrentUserId: async () => {
    const HEADER = getHeaders();
    return await httpClient().get<UserIdResponse>("/profile", {}, HEADER.headers);
  },
  getUserData: async (userId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<UserResponse>(`/profile/${userId}`, { "": "" }, HEADER.headers);
  },
  putUserData: async ({ userId, userData }: { userId: number; userData: UserDataParams }) => {
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
