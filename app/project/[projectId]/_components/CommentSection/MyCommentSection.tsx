"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useCheckLogin from "@/app/_hooks/useCheckLogin";
import { commentApi } from "@/app/_apis/comment";
import MyCommentProvider from "../../_context/MyCommentProvider";
import { useMyCommentContext } from "../../_context/MyCommentProvider";
// import useCommentView from "@/app/_hooks/useCommentView";
import ShowComment from "./MyComment/ShowComment";
import WriteComment from "./MyComment/WriteComment";
import EditComment from "./MyComment/EditComment";

interface Props {
  projectId: number;
}

const CommentContainer = ({ projectId }: Props) => {
  const { view, setView } = useMyCommentContext();
  const { isLoggedIn } = useCheckLogin();

  const { data: myComment } = useQuery({
    queryKey: ["myComment"],
    queryFn: () => commentApi.getMyComment(projectId),
    enabled: !!isLoggedIn,
  });

  // if (!myComment) return <WriteComment projectId={projectId} />;
  // if (myComment && myComment.exists) setView("show");

  useEffect(() => {
    if (myComment && myComment.exists && view !== "edit") setView("show");
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
  // const { view, setView } = useCommentView();
  // const { isLoggedIn } = useCheckLogin();

  // const { data: myComment } = useQuery({
  //   queryKey: ["myComment"],
  //   queryFn: () => commentApi.getMyComment(projectId),
  //   enabled: !!isLoggedIn,
  // });

  // useEffect(() => {
  //   if (myComment && myComment.exists) setView("show");
  // }, [view, setView, myComment]);

  // if (!myComment) return <WriteComment projectId={projectId} />;

  return (
    <section>
      <MyCommentProvider>
        <CommentContainer projectId={projectId} />

        {/* {view === "show" && <ShowComment projectId={projectId} myComment={myComment} />}
      {view === "write" && <WriteComment projectId={projectId} />}
      {view === "edit" && <EditComment projectId={projectId} myComment={myComment} />} */}
      </MyCommentProvider>
    </section>
  );
}

export default MyCommentSection;
