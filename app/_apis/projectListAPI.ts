import { MyPageProjectListType } from "../mypage/_components/MypageProjectSection";
import httpClient from "./httpClient";
import { ProjectResponseType } from "./schema/projectResponse";

// 임시 headers
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4NTVkZmEyZSIsImlhdCI6MTcxODk2ODk3MywiZXhwIjoxNzE4OTkwNTczfQ.otg6Xy3QQM0kdEgTJZan9Avtx0ubLlI2iUQjInV4ON0",
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
