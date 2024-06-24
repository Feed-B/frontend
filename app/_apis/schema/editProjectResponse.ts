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

export interface ProjectLinkList {
  id: number;
  siteType: string;
  url: string;
}

export interface ProjectTeammateList {
  id: number;
  teammateName: string;
  job: string;
  url: string;
}

export interface TechStackList {
  id: number;
  techStack: string;
}
