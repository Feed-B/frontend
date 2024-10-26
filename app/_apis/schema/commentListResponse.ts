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
  customPageable: CustomPageable;
}

interface CustomPageable {
  first: boolean;
  last: boolean;
  hasNext: boolean;
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
}
