import React from "react";
import Button from "@/app/_components/Button/Button";

interface Props {
  mode?: "write" | "edit";
  onClick: () => void;
}

function EnterButton({ mode = "write", onClick }: Props) {
  return (
    <div className="flex">
      {mode === "write" ? (
        <Button className="ml-auto" buttonSize="normal" bgColor="yellow" onClick={onClick}>
          등록
        </Button>
      ) : (
        <>
          <Button className="ml-auto" buttonSize="normal" bgColor="gray" onClick={onClick}>
            취소
          </Button>
          <Button className="ml-2" buttonSize="normal" bgColor="yellow" onClick={onClick}>
            수정
          </Button>
        </>
      )}
    </div>
  );
}

export default EnterButton;
