import { CommentListResponse } from "../_apis/schema/commentListResponse";

export interface UploadCommentParams {
  ideaRank?: number;
  designRank?: number;
  functionRank?: number;
  completionRank?: number;
  comment?: string;
}

export interface UpadateCommentParams {
  ideaRank?: number;
  designRank?: number;
  functionRank?: number;
  completionRank?: number;
  comment?: string;
}

export type Comment = CommentListResponse["content"][0];
