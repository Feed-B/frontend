export const JOB_CATEGORIES = {
  ALL: "ALL",
  FRONTEND: "FRONTEND",
  BACKEND: "BACKEND",
  DESIGNER: "DESIGNER",
  IOS: "IOS",
  ANDROID: "ANDROID",
  DEVOPS: "DEVOPS",
  PLANNER: "PLANNER",
  FULLSTACK: "FULLSTACK",
  ETC: "ETC",
};

export const JOB_CATEGORIES_KR: Record<string, string> = {
  ALL: "전체",
  FRONTEND: "프론트엔드",
  BACKEND: "백엔드",
  DESIGNER: "디자이너",
  IOS: "IOS",
  ANDROID: "안드로이드",
  DEVOPS: "데브옵스",
  PLANNER: "기획자",
  FULLSTACK: "풀스택",
  ETC: "기타",
};

export type JobCategoriesType =
  | "전체"
  | "프론트엔드"
  | "백엔드"
  | "디자이너"
  | "IOS"
  | "안드로이드"
  | "데브옵스"
  | "기획자"
  | "풀스택"
  | "기타";
