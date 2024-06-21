import httpClient from "./httpClient";
import { SignUpRequest, SignUpResponse } from "./schema/user";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const signUpApi = {
  postSignUp: async (userData: SignUpRequest): Promise<SignUpResponse> => {
    return await httpClient().post<SignUpResponse, SignUpRequest>("/signUp", userData);
  },
};

// export const signUpApi = {
//   postSignUp: async (userData: SignUpRequest): Promise<SignUpResponse> => {
//     try {
//       const response = await fetch(BASE_URL + "/signUp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const responseData: SignUpResponse = await response.json();
//       console.log(responseData.token);
//       return responseData;
//     } catch (error) {
//       console.error("API request failed", error);
//       throw error;
//     }
//   },
// };
