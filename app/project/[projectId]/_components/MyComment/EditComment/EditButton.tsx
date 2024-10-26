"use client";

import Button from "@/app/_components/Button/Button";
import useCommentMutation from "@/app/_hooks/mutations/useCommentMutation";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";
import { useCurrentPageContext } from "../../../_context/CurrentPageProvider";

interface Props {
  projectId: number;
  ratingId: number;
  mode?: "write" | "edit";
  showComment: () => void;
}

function EditButton({ projectId, ratingId, showComment }: Props) {
  const { setCurrentPage } = useCurrentPageContext();
  const { rating, comment } = useEnterCommentContext();

  const putCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const { putCommentMutation } = useCommentMutation({
    id: projectId,
    ratingId,
    commentData: putCommentData,
    setCurrentPage,
  });

  const editComment = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    putCommentMutation.mutate();
    showComment();
  };

  return (
    <div className="ml-auto flex gap-2">
      <Button
        className="border border-gray-200 hover:bg-gray-200"
        buttonSize="normal"
        bgColor="gray"
        onClick={showComment}>
        취소
      </Button>
      <Button buttonSize="normal" bgColor="yellow" onClick={editComment}>
        수정
      </Button>
    </div>
  );
}

export default EditButton;
