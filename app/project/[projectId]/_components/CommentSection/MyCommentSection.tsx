"use client";

import React from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { MyCommentResponse } from "@/app/_apis/schema/commentResponse";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import MyCommentProvider from "../../_context/MyCommentProvider";
import { useMyCommentContext } from "../../_context/MyCommentProvider";
import ShowComment from "./MyComment/ShowComment";
import WriteComment from "./MyComment/WriteComment";
import EditComment from "./MyComment/EditComment";

interface Props {
  projectId: number;
}

const CommentContainer = ({ projectId }: Props) => {
  const { view, setView } = useMyCommentContext();
  const { data: myComment }: UseQueryResult<MyCommentResponse, Error> = useQuery(commentQueryKeys.myComment(projectId));
  if (!myComment) return null;

  if (myComment.exists) setView("show");

  console.log("myComment.exists", myComment.exists);
  return (
    <section>
      {view === "show" && <ShowComment />}
      {view === "write" && <WriteComment />}
      {view === "edit" && <EditComment />}
    </section>
  );
};

function MyCommentSection({ projectId }: Props) {
  return (
    <section>
      <MyCommentProvider>
        <CommentContainer projectId={projectId} />
      </MyCommentProvider>
    </section>
  );
}

export default MyCommentSection;
