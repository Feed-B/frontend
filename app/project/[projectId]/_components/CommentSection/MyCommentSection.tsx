"use client";

import React, { useEffect } from "react";
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
  useEffect(() => {
    if (myComment && myComment.exists) {
      setView("show");
    }
  }, [myComment, setView]);

  if (!myComment) return null;

  return (
    <section>
      {view === "show" && <ShowComment projectId={projectId} myComment={myComment} />}
      {view === "write" && <WriteComment />}
      {view === "edit" && <EditComment projectId={projectId} myComment={myComment} />}
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
