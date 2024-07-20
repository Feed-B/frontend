export interface CommentListResponse {
  content: [
    {
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
  projectRating: {
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
  };
}
