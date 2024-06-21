import { MyPageProjectListType } from "../mypage/_components/MypageProjectSection";
import httpClient from "./httpClient";

export interface ProjectResponseType {
  content: ProjectData[];
  customPageable: CustomPageable;
}

export interface ProjectData {
  projectId: number;
  thumbnailUrl: string;
  stackList: string[];
  likeCount: number;
  isLiked: boolean;
  projectTitle: string;
  introduction: string;
  viewCount: number;
  createdAt: string;
  modifiedAt: string;
}

export interface CustomPageable {
  first: boolean;
  last: boolean;
  hasNext: boolean;
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
}

// 임시 headers
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNjNkYzNiOCIsImlhdCI6MTcxODkzNTEwNiwiZXhwIjoxNzE4OTU2NzA2fQ.fkP5c4awYUznYuc1_iczy56aHwIi-5mlkD50XebZRKs",
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
