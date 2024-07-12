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
}

export interface ReflyCommentResponse {
  content: [
    {
      replyId: number;
      userId: number;
      job: string;
      author: string;
      comment: string;
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
