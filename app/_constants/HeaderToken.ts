import { getToken } from "../_utils/handleToken";

export const HEADER = {
  headers: {
    Authorization: "Bearer " + getToken()?.accessToken,
  },
  multipartHeaders: {
    Authorization: "Bearer " + getToken()?.accessToken,
    "Content-Type": "multipart/form-data",
  },
  applicationHeaders: {
    Authorization: "Bearer " + getToken()?.accessToken,
    "Content-Type": "application/json",
  },
};
