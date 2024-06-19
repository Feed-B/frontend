import httpClient from "./httpClient";

interface ProjectListAPI {
  content: Content[];
  customPageable: CustomPageable;
}

interface Content {
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

interface CustomPageable {
  first: boolean;
  last: boolean;
  hasNext: boolean;
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
}

export const projectListAPI = {
  getMyProjectList: async ({ page = 1, size = 24, limit = 100 }) => {
    await httpClient().get<ProjectListAPI>(`/projects/mine?page=${page}&size=${size}&limit=${limit}`, {
      page,
      size,
      limit,
    });
  },
};
