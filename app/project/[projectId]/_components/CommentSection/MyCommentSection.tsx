import React from "react";
import WriteComment from "./MyComment/WriteComment";

function MyCommentSection() {
  return (
    <section className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      <WriteComment />
    </section>
  );
}

export default MyCommentSection;
