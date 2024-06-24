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
  commentId: number;
  authorId: number;
  authorName: string;
  job: string;
  comment: string;
  averageStarRank: number;
  childCommentCount: number;
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
