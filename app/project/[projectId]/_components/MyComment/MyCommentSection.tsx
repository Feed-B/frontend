"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import { commentQueryKeys } from "@/app/_queryFactory/commentQuery";
import { WINDOW_BOUNDARY } from "@/app/_constants/WindowSize";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import MyCommentProvider from "../../_context/MyCommentProvider";
import { useMyCommentContext } from "../../_context/MyCommentProvider";
import ShowComment from "./ShowComment/ShowComment";
import WriteComment from "./WriteComment/WriteComment";
import EditComment from "./EditComment/EditComment";
import WriteCommentButton from "./WriteComment/WriteCommentButton";

interface Props {
  projectId: number;
}

const CommentContainer = ({ projectId }: Props) => {
  const { view, setView } = useMyCommentContext();
  const { isLoggedIn } = useCheckLogin();
  const { windowWidth } = useBrowserSize();
  const { TBC } = WINDOW_BOUNDARY.MAX;

  const commentQuery = commentQueryKeys.myComment(projectId);

  const { data: myComment } = useQuery({
    queryKey: commentQuery.queryKey,
    queryFn: commentQuery.queryFn,
    enabled: !!isLoggedIn,
  });

  useEffect(() => {
    if (myComment && myComment.exists && view !== "edit") setView("show");
    if (myComment && !myComment.exists && view !== "edit") setView("write");
  }, [view, setView, myComment, isLoggedIn]);

  if (!myComment) return <WriteComment projectId={projectId} />;

  return (
    <section>
      {view === "show" && <ShowComment projectId={projectId} myComment={myComment} />}
      {view === "write" &&
        (windowWidth > TBC ? <WriteComment projectId={projectId} /> : <WriteCommentButton projectId={projectId} />)}
      {view === "edit" && (windowWidth > TBC ? <EditComment projectId={projectId} myComment={myComment} /> : <></>)}
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
