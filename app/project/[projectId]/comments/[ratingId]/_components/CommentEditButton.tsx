"use client";

import Button from "@/app/_components/Button/Button";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import useCommentMutation from "@/app/_hooks/mutations/useCommentMutation";
import { useEnterCommentContext } from "../../../_context/EnterCommentProvider";

interface Props {
  ratingId: number;
  onClick: () => void;
  projectId: number;
}

function CommentEditButton({ ratingId, onClick, projectId }: Props) {
  const { rating, comment } = useEnterCommentContext();

  const { windowWidth } = useBrowserSize();

  const editCommentData = {
    ideaRank: rating[0],
    designRank: rating[1],
    functionRank: rating[2],
    completionRank: rating[3],
    comment: comment,
  };

  const { putCommentMutation } = useCommentMutation({ id: projectId, ratingId, commentData: editCommentData });

  const editComment = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    revalidateTagAction("commentDetail");
    revalidateTagAction("commentList");
    revalidateTagAction("myComment");
    putCommentMutation.mutate();
    onClick();
  };

  return (
    <div className="flex">
      <>
        <Button
          className="ml-auto"
          buttonSize={windowWidth < 480 ? "small" : "normal"}
          bgColor="gray"
          onClick={onClick}>
          취소
        </Button>
        <Button
          className="ml-2"
          buttonSize={windowWidth < 480 ? "small" : "normal"}
          bgColor="yellow"
          onClick={editComment}>
          수정
        </Button>
      </>
    </div>
  );
}

export default CommentEditButton;
