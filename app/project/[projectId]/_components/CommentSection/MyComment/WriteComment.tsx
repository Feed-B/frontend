"use client";

import useCheckLogin from "@/app/_hooks/useCheckLogin";
import ToolTip from "../../Comment/ToolTip";
import WriteCommentShield from "../../Shield/WriteCommentShield";
import EnterRating from "../../Comment/EnterRating";
import EnterCommentProvider from "../../../_context/EnterCommentProvider";
import EnterText from "../../Comment/EnterText";
import WriteButton from "../../Comment/WriteButton";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";

interface Props {
  projectId: number;
}

function WriteComment({ projectId }: Props) {
  const { setView } = useMyCommentContext();
  const { isLoggedIn } = useCheckLogin();

  return (
    <div className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      {!isLoggedIn && <WriteCommentShield />}
      <div className={`${!isLoggedIn && "blur-sm"}`}>
        <div className="mb-8 flex items-center gap-1">
          <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
          <ToolTip />
        </div>
        <div className="flex flex-col gap-6">
          <EnterCommentProvider>
            <EnterRating />
            <EnterText />
            <WriteButton projectId={projectId} showComment={() => setView("show")} />
          </EnterCommentProvider>
        </div>
      </div>
    </div>
  );
}

export default WriteComment;
