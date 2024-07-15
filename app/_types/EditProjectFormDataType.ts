export interface TeammateType {
  id?: number;
  name: string;
  job: string;
  url: string;
}

export interface ProjectLinkListType {
  id?: number;
  siteType: string;
  url: string;
}

export interface EditProjectFormData {
  title: string;
  introduction: string;
  content: string;
  serviceUrl: string;
  projectTechStackList: any[];
  teammateList: TeammateType[];
  projectLinkList: ProjectLinkListType[];
  thumbnail: File | null;
  thumbnailUrl: string;
  imageType: string;
  imageList: File[];
  imageUrlList: string[];
}
