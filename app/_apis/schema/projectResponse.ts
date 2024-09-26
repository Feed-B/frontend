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
  projectLinks: ProjectLinkList[];
  projectTechStacks: TechStackList[];
  thumbnailUrl: string;
  imageUrlList: ImageUrlList[];
  isMine: boolean;
  isLiked: false;
}

export interface EditProjectResponse {
  title: string;
  introduction: string;
  content: string;
  serviceUrl: string;
  imageType: string;
  projectLinks: ProjectLinkList[];
  projectTeammates: ProjectTeammateList[];
  techStacks: TechStackList[];
  thumbnailUrl: string;
  imageUrlList: string[];
}

interface ProjectLinkList {
  id: number;
  siteType: string;
  url: string;
}

interface ProjectTeammateList {
  id: number;
  teammateName: string;
  job: string;
  url: string;
}

interface TechStackList {
  id: number;
  techStack: string;
}

interface ImageUrlList {
  id: number;
  url: string;
  idx: number;
}

export interface TeamMemberResponse extends Array<TeamMember> {}

interface TeamMember {
  job: string;
  teammateList: ProjectTeammateList[];
}

export interface TotalRatingResponse {
  averageRank: number;
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  rankCount: number;
}
