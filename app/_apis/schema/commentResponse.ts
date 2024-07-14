export interface CommentList {
  ratingId: number;
  averageRank: number;
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  comment: string;
  childCommentCount: number;
  authorProfileImageUrl: string;
  authorId: number;
  authorName: string;
  memberJob: string;
  //API 수정되면 추가
  /* 
  customPageable: {
    first: boolean;
    last: boolean;
    hasNext: boolean;
    totalPages: number;
    totalElements: number;
    page: number;
    size: number;
  };
  */
}

export interface CommentListResponse extends Array<CommentList> {}

export interface CommentDetailResponse {
  authorId: number;
  authorName: string;
  job: string;
  comment: string;
  averageStarRank: number;
  childCommentCount: number;
  ratingId: number;
  averageRank: number;
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  authorProfileImageUrl: string;
}

export interface ReflyCommentResponse {
  content: [
    {
      commentId: number;
      authorId: number;
      job: string;
      authorName: string;
      comment: string;
      authorProfileImageUrl: string;
    },
  ];
  customPageable: {
    first: boolean;
    last: boolean;
    hasNext: boolean;
    totalPages: number;
    totalElements: number;
    page: number;
    size: number;
  };
}

export interface MyCommentResponse {
  exists: boolean;
  projectCommentResponseDto?: {
    commentId: number;
    authorId: number;
    authorName: string;
    job: string;
    comment: string;
    averageStarRank: number;
    childCommentCount: number;
  };
}
