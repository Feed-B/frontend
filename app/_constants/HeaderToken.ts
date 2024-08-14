import { getToken } from "../_utils/handleToken";

export const getHeaders = () => {
  const token = getToken()?.accessToken;

  return {
    headers: {
      Authorization: "Bearer " + token,
    },
    multipartHeaders: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
    applicationHeaders: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
};
