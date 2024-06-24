import { getToken } from "../_utils/handleToken";

export const HEADER = {
  headers: {
    Authorization: "Bearer " + getToken()?.accessToken,
  },
};
