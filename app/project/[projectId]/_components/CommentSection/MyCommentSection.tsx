"use client";

import React from "react";
import MyCommentProvider from "../../_context/MycommentProvider";
import { useMyCommentContext } from "../../_context/MycommentProvider";
import ShowComment from "./MyComment/ShowComment";
import WriteComment from "./MyComment/WriteComment";
import EditComment from "./MyComment/EditComment";

const CommentContainer = () => {
  const { view } = useMyCommentContext();

  return (
    <section>
      {view === "show" && <ShowComment />}
      {view === "write" && <WriteComment />}
      {view === "edit" && <EditComment />}
    </section>
  );
};

function MyCommentSection() {
  return (
    <section>
      <MyCommentProvider>
        <CommentContainer />
      </MyCommentProvider>
    </section>
  );
}

export default MyCommentSection;
