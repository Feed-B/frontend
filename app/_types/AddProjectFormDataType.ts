export interface TeammateType {
  name: string;
  job: string;
  url: string;
}

export interface ProjectLinkListType {
  siteType: string;
  url: string;
}

export interface AddProjectFormData {
  title: string;
  introduction: string;
  content: string;
  serviceUrl: string;
  projectTechStackList: string[];
  teammateList: TeammateType[];
  projectLinkList: ProjectLinkListType[];
  thumbnail: File;
  imageList: File[];
}
