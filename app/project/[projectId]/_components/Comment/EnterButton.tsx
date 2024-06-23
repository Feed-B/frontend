import React from "react";
import Button from "@/app/_components/Button/Button";
import { useMyCommentContext } from "../../_context/MyCommentProvider";

interface Props {
  mode?: "write" | "edit";
}

function EnterButton({ mode = "write" }: Props) {
  const { setView } = useMyCommentContext();

  return (
    <div className="flex">
      {mode === "write" ? (
        <Button className="ml-auto" buttonSize="normal" bgColor="yellow">
          등록
        </Button>
      ) : (
        <>
          <Button className="ml-auto" buttonSize="normal" bgColor="white" onClick={() => setView("show")}>
            취소
          </Button>
          <Button className="ml-2" buttonSize="normal" bgColor="yellow" onClick={() => setView("show")}>
            수정
          </Button>
        </>
      )}
    </div>
  );
}

export default EnterButton;
