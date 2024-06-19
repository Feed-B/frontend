"use client";

import ToolTip from "../../Comment/ToolTip";
import EnterRating from "../../Comment/EnterRating";
import EnterCommentProvider from "../../../_context/EnterCommentProvider";
import EnterText from "../../Comment/EnterText";

function EditComment() {
  return (
    <div className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      <div className="mb-8 flex items-center gap-1">
        <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
        <ToolTip />
      </div>
      <div className="flex flex-col gap-6">
        <EnterCommentProvider>
          <EnterRating />
          <EnterText mode="edit" />
        </EnterCommentProvider>
      </div>
    </div>
  );
}

export default EditComment;
