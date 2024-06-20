export interface ProjectListResponse {
  content: [
    {
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
    },
  ];
  customPageable: {
    first: boolean;
    last: boolean;
    hasNext: boolean;
    totalPages: number;
    totalElements: number;
    page: number;
    size: number;
  };
}

export interface ProjectResponse {
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
