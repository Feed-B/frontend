import { CommentListResponse } from "@/app/_apis/schema/commentResponse";

export type Comment = CommentListResponse["content"][0];
