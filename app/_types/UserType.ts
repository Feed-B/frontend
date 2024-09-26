export interface UserDataParams {
  memberEditRequestDto: {
    id: number;
    nickName: string;
    aboutMe: string;
    job: JobType;
  };
  image: File | null;
  imageIdx: ImageIndexType;
}

export type JobType = "FRONTEND" | "BACKEND" | "DESIGNER" | "ANDROID" | "IOS" | "DEVOPS";
export type ImageIndexType = 0 | 1 | 2;
