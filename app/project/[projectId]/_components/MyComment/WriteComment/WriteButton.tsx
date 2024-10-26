"use client";

import Button from "@/app/_components/Button/Button";
import useCommentMutation from "@/app/_hooks/mutations/useCommentMutation";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";

interface Props {
  projectId: number;
  mode?: "write" | "edit";
  showComment: () => void;
}

function WriteButton({ projectId, showComment }: Props) {
  const { rating, comment } = useEnterCommentContext();

  const isDisabled = rating.some(element => element < 1);

  const postCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const { postCommentMutation } = useCommentMutation({ id: projectId, commentData: postCommentData });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!isDisabled) {
      postCommentMutation.mutate();
      showComment();
    }
  };

  return (
    <div className="flex">
      <Button className="ml-auto" buttonSize="normal" bgColor="yellow" onClick={handleSubmit} disabled={isDisabled}>
        등록
      </Button>
    </div>
  );
}

export default WriteButton;
