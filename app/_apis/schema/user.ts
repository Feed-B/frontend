export interface SignUpRequest {
  email: string;
  nickName: string;
  aboutMe: string;
  job: string;
}

export interface SignUpResponse {
  token: string;
}
