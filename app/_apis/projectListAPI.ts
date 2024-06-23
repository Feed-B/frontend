import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";
import httpClient from "./httpClient";
import { ProjectResponseType } from "./schema/projectResponse";

// 임시 headers
export const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MjVjYmQyNyIsImlhdCI6MTcxOTEzODkzNiwiZXhwIjoxNzE5MTYwNTM2fQ.3Rm6NHdPxwlWrFf_zHC4WzEfHMsGNSMhIVIPrbg_gG0",
  },
};

export const projectListAPI = {
  getMyProjectList: async ({ page = 1, size = 24, limit = 100 }, selectDataType: MyPageProjectListType) => {
    return await httpClient().get<ProjectResponseType>(
      `/projects/mine${selectDataType === "wishProject" ? "/likes" : ""}?page=${page}&size=${size}&limit=${limit}`,
      {
        page,
        size,
        limit,
      },
      headers.headers
    );
  },
};
