import { StaticImageData } from "next/image";

export interface ProjectListResponse {
  id: number;
  userId: number;
  titleImage: string | StaticImageData;
  stackList: string[];
  wishCount: number;
  isWish: boolean;
  projectTitle: string;
  subDescription: string;
  viewCount: number;
  createdAt: string;
}
