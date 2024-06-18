"use client";

import ToolTip from "../../Comment/ToolTip";
import WriteCommentShield from "../../Shield/WriteCommentShield";
import WriteRating from "../../Comment/WriteRating";
import MyCommentProvider from "../../../_context/MyCommentProvider";
import WriteText from "../../Comment/WriteText";

const isLogin = true;

function WriteComment() {
  return (
    <>
      {!isLogin && <WriteCommentShield />}
      <div className={`${!isLogin && "blur-sm"}`}>
        <div className="mb-8 flex items-center gap-1">
          <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
          <ToolTip />
        </div>
        <div className="flex flex-col gap-6">
          <MyCommentProvider>
            <WriteRating />
            <WriteText />
          </MyCommentProvider>
        </div>
      </div>
    </>
  );
}

export default WriteComment;
