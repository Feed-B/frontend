export interface CommentsListResponse {
  content: [
    {
      commentId: number;
      authorId: number;
      authorName: string;
      job: string;
      comment: string;
      averageStarRank: number;
      childCommentCount: number;
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
