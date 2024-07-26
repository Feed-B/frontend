"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
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
  const { isLoggedIn } = useCheckLogin();

  const commentQuery = commentQueryKeys.myComment(projectId);

  const { data: myComment } = useQuery({
    queryKey: commentQuery.queryKey,
    queryFn: commentQuery.queryFn,
    enabled: !!isLoggedIn,
  });

  useEffect(() => {
    if (myComment && myComment.exists && view !== "edit") setView("show");
    if (myComment && !myComment.exists && view !== "edit") setView("write");
  }, [view, setView, myComment]);

  if (!myComment) return <WriteComment projectId={projectId} />;

  return (
    <section>
      {view === "show" && <ShowComment projectId={projectId} myComment={myComment} />}
      {view === "write" && <WriteComment projectId={projectId} />}
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
