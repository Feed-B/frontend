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
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZTJlZDAyMyIsImlhdCI6MTcxODg3NDQ2NywiZXhwIjoxNzE4ODk2MDY3fQ.j2HKDVPZkRLVJ9uH7JwBVEg1InSe7nbuKniR3z00wvI",
  },
};

export const projectListAPI = {
  getMyProjectList: async ({ page = 1, size = 24, limit = 100 }) => {
    await httpClient().get<ProjectResponseType>(
      `/projects/mine?page=${page}&size=${size}&limit=${limit}`,
      {
        page,
        size,
        limit,
      },
      headers.headers
    );
  },
  getWishProjectList: async ({ page = 1, size = 24, limit = 100 }) => {
    await httpClient().get<ProjectResponseType>(`/projects/mine/likes?page=${page}&size=${size}&limit=${limit}`, {
      page,
      size,
      limit,
    });
  },
};
