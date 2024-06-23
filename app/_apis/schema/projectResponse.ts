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

export interface ProjectResponse {
  projectId: number;
  memberId: number;
  authorName: string;
  authorJob: string;
  createdAt: string;
  likeCount: number;
  title: string;
  content: string;
  introductions: string;
  serviceUrl: string;
  imageType: string;
  projectLinks: [
    {
      id: number;
      siteType: string;
      url: string;
    },
  ];
  projectTechStacks: [
    {
      id: number;
      techStack: string;
    },
  ];
  thumbnailUrl: string;
  imageUrlList: [
    {
      id: number;
      url: string;
      idx: number;
    },
  ];
  isMine: boolean;
}

export interface TeamMemberResponse extends Array<TeamMember> {}

export interface TeamMember {
  job: string;
  teammateList: [
    {
      id: number;
      teammateName: string;
      job: string;
      url: string;
    },
  ];
}

export interface RatingsResponse {
  averageRank: number;
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
}
