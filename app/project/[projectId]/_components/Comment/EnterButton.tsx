"use client";

import Button from "@/app/_components/Button/Button";

interface Props {
  // projectId: number;
  mode?: "write" | "edit";
  onClick: () => void;
}

function EnterButton({ mode = "write", onClick }: Props) {
  // const { rating, comment } = useEnterCommentContext();
  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: (comment: string) => {
  //     return commentApi.postComment(projectId, rating, comment);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["comment", "list", "commentList"],
  //     });
  //   },
  // });

  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   if (rating.every(element => element > 0)) {
  //     mutation.mutate(comment);
  //   }
  // };

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
