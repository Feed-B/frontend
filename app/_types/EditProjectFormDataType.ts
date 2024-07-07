import { ProjectLinkListType, TeammateType } from "./AddProjectFormDataType";

export interface EditProjectFormData {
  title: string;
  introduction: string;
  content: string;
  serviceUrl: string;
  projectTechStackList: any[];
  teammateList: TeammateType[];
  projectLinkList: ProjectLinkListType[];
  thumbnail: File;
  thumbnailUrl: string;
  imageType: string;
  imageList: File[];
  imageUrlList: string[];
}
