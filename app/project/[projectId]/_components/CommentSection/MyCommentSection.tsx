import React from "react";
// import WriteComment from "./MyComment/WriteComment";
import EditComment from "./MyComment/EditComment";

function MyCommentSection() {
  return (
    <section className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      {/* <WriteComment /> */}
      <EditComment />
    </section>
  );
}

export default MyCommentSection;
