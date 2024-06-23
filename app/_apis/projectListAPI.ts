import { MyPageProjectListType } from "../profile/[userId]/_components/MypageProjectSection";
import httpClient from "./httpClient";
import { ProjectResponseType } from "./schema/projectResponse";

// 임시 headers
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZjMzZjhlYiIsImlhdCI6MTcxOTEwNzI2NCwiZXhwIjoxNzE5MTI4ODY0fQ.1XXJL2NPyJ-OaWZQ5pjRDKBZr1L6PQv6oYnO5u0kMvw",
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
