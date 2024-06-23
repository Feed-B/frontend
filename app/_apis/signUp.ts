import httpClient from "./httpClient";
import { SignUpRequest, SignUpResponse } from "./schema/user";

export const signUpApi = {
  postSignUp: async (userData: SignUpRequest): Promise<SignUpResponse> => {
    return await httpClient().post<SignUpResponse, SignUpRequest>("/signUp", userData);
  },
};
