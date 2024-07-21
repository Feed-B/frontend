"use client";

import { MyCommentResponse } from "@/app/_apis/schema/commentResponse";
import ToolTip from "../../Comment/ToolTip";
import EnterRating from "../../Comment/EnterRating";
import EnterCommentProvider from "../../../_context/EnterCommentProvider";
import EnterText from "../../Comment/EnterText";
import EnterButton from "../../Comment/EnterButton";
import { useMyCommentContext } from "../../../_context/MyCommentProvider";

interface Props {
  projectId: number;
  myComment: MyCommentResponse;
}

function EditComment({ projectId, myComment }: Props) {
  const { setView } = useMyCommentContext();

  const getRatingData = [
    myComment.projectRating.ideaRank,
    myComment.projectRating.designRank,
    myComment.projectRating.functionRank,
    myComment.projectRating.completionRank,
  ];

  if (!myComment.projectRating) return null;
  const { comment } = myComment.projectRating;

  return (
    <div className="relative flex flex-col rounded-xl border border-solid border-gray-300 bg-gray-100 p-6">
      <div className="mb-8 flex items-center gap-1">
        <p className="text-xl font-semibold text-gray-900">프로젝트를 평가해주세요</p>
        <ToolTip />
      </div>
      <div className="flex flex-col gap-6">
        <EnterCommentProvider>
          <EnterRating ratingValue={getRatingData} />
          <EnterText commentValue={comment} />
          <EnterButton projectId={projectId} mode="edit" onClick={() => setView("show")} />
        </EnterCommentProvider>
      </div>
    </div>
  );
}

export default EditComment;
