"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { profileApi } from "@/app/_apis/userApi";
import { userQueryKey } from "@/app/_queryFactory/userQuery";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { useCommentDetail } from "@/app/_hooks/reactQuery/useCommentQuery";
import CommentProfile from "../../../_components/Comment/CommentProfile";
import EnterRating from "../../../_components/Comment/EnterRating";
import EnterCommentProvider from "../../../_context/EnterCommentProvider";
import EnterText from "../../../_components/Comment/EnterText";
import RatingBox from "./RatingBox";
import CommentDropbox from "./CommentDropbox";
import DetailLoading from "./DetailLoading";
import CommentEditButton from "./CommentEditButton";

interface CommentSectionProps {
  projectId: number;
  ratingId: number;
}

function CommentSection({ projectId, ratingId }: CommentSectionProps) {
  const { isOpen: commentEditOpen, toggleState } = useToggleHook();
  const { data: commentDetailData, isPending } = useCommentDetail(ratingId);

  const { data: userId } = useQuery({
    queryKey: userQueryKey.userId().queryKey,
    queryFn: () => profileApi.getCurrentUserId(),
  });

  if (!commentDetailData) {
    return <p>데이터를 가져오는데 실패했습니다. 죄송합니다.</p>;
  }

  if (isPending) {
    return <DetailLoading />;
  }

  const transformedData = [
    commentDetailData.ideaRank,
    commentDetailData.designRank,
    commentDetailData.functionRank,
    commentDetailData.completionRank,
  ];

  const ratingData = {
    averageRank: commentDetailData.averageRank,
    completionRank: commentDetailData.completionRank,
    designRank: commentDetailData.designRank,
    functionRank: commentDetailData.functionRank,
    ideaRank: commentDetailData.ideaRank,
  };

  return (
    <>
      <section className="mt-10 w-full p-4">
        <div className="flex items-center justify-between">
          <CommentProfile
            userId={commentDetailData.authorId}
            userName={commentDetailData.authorName}
            userJob={commentDetailData.memberJob}
            userProfileImageUrl={commentDetailData.authorProfileImageUrl}
          />
          <div className="relative flex items-center gap-2">
            {userId?.id === commentDetailData.authorId && (
              <CommentDropbox toggleState={toggleState} ratingId={ratingId} projectId={projectId} />
            )}
          </div>
        </div>
      </section>
      {commentEditOpen ? (
        <section className=" mt-4 flex min-h-[300px] flex-col gap-10">
          <EnterCommentProvider>
            <EnterText commentValue={commentDetailData.comment} />
            <EnterRating ratingValue={transformedData} />
            <CommentEditButton onClick={toggleState} projectId={projectId} ratingId={ratingId} />
          </EnterCommentProvider>
        </section>
      ) : (
        <section className="mt-4">
          <p className="mt-4 min-h-[230px] w-full whitespace-pre-wrap p-4 text-sm font-normal text-gray-900">
            {commentDetailData?.comment}
          </p>
          <RatingBox {...ratingData} />
        </section>
      )}
    </>
  );
}

export default CommentSection;
