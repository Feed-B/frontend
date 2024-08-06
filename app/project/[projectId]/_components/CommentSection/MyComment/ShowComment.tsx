"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import arrowIcon from "@/public/icons/blackArrowRight.svg";
import { MyCommentResponse } from "@/app/_apis/schema/commentResponse";
import { commentApi } from "@/app/_apis/comment";
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import TotalStar from "../../Comment/TotalStar";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";
import CommentProfile from "../../Comment/CommentProfile";
import CommentCount from "../../Comment/CommentCount";
import MenuDropBox from "../../MenuDropBox/MenuDropBox";

interface Props {
  projectId: number;
  myComment: MyCommentResponse;
}

function ShowComment({ projectId, myComment }: Props) {
  const queryClient = useQueryClient();
  const { setView } = useMyCommentContext();
  const { addToast } = useToast();

  const projectRatingQuery = projectQueryKeys.totalRating(projectId);
  const commentQuery = commentQueryKeys.myComment(projectId);
  const commentListQuery = commentQueryKeys.list({ projectId, page: 1 });

  const mutation = useMutation({
    mutationFn: () => {
      return commentApi.deleteComment(ratingId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectRatingQuery.queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQuery.queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentListQuery.queryKey,
      });
      addToast("프로젝트 리뷰가 삭제되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 삭제 오류가 발생했습니다", "error");
    },
  });

  if (!myComment.projectRating) return null;
  const { authorId, authorName, memberJob, childCommentCount, comment, averageRank, ratingId, authorProfileImageUrl } =
    myComment.projectRating;

  const handleDeleteComment = () => {
    mutation.mutate();
    setView("write");
  };

  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">내가 쓴 리뷰</h3>
      <div className="relative flex flex-col gap-4 rounded-xl border border-solid border-gray-300 bg-gray-100 p-4">
        <div className="flex justify-between">
          <CommentProfile
            userId={authorId}
            userName={authorName}
            userJob={memberJob}
            userProfileImageUrl={authorProfileImageUrl}
          />
          <div className="flex items-center gap-2">
            <CommentCount size="large" commentCount={childCommentCount} />
            <MenuDropBox
              mode="comment"
              projectId={projectId}
              handleEditClick={() => setView("edit")}
              handleDelete={handleDeleteComment}
            />
          </div>
        </div>
        <p className="text-overflow-3 h-14 text-sm text-gray-900">{comment}</p>
        <div className="flex justify-between">
          <TotalStar starRating={averageRank} />
          <Link href={`/project/${projectId}/comments/${ratingId}?userId=${authorId}`}>
            <div className="flex items-center">
              <p className="text-xs text-gray-900">더보기</p>
              <Image src={arrowIcon} alt="댓글 상세보기." width={20} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShowComment;
