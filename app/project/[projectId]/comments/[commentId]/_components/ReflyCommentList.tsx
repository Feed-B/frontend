import React from "react";
import ReflyCommentItem from "./ReflyCommentItem";

const testData = {
  replyCommentList: [
    {
      userId: 1, //작성자 ID
      techStack: "프론트엔드",
      name: "윤병현", //작성자 이름
      comment: "저는 다른 생각입니다", //댓글 내용
    },
    {
      userId: 2, //작성자 ID
      techStack: "백엔드",
      name: "윤병현", //작성자 이름
      comment: "저도 다른 생각입니다", //댓글 내용
    },
  ],
};

function ReflyCommentList() {
  return (
    <section className="mb-12 mt-4">
      {testData.replyCommentList.map((replyComment, index) => (
        <ReflyCommentItem key={index} replyComment={replyComment} />
      ))}
    </section>
  );
}

export default ReflyCommentList;
