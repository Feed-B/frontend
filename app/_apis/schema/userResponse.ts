export interface SignUpRequest {
  email: string;
  nickName: string;
  aboutMe: string;
  job: string;
}

export interface SignUpResponse {
  token: string;
}

export interface UserIdResponse {
  id: number;
}

export interface UserResponse {
  id: number;
  email: string;
  nickName: string;
  aboutMe: string;
  job: "FRONTEND" | "BACKEND" | "DESIGNER" | "ANDROID" | "IOS" | "DEVOPS";
  imageUrl: string;
}
