import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { commentApi } from "@/app/_apis/commentApi";
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKey } from "@/app/_queryFactory/commentQuery";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";

interface CommentData {
  ideaRank: number;
  designRank: number;
  functionRank: number;
  completionRank: number;
  comment: string;
}

const useCommentMutation = ({
  id,
  ratingId,
  commentData,
  setCurrentPage,
  setTextValue,
}: {
  id?: number;
  ratingId?: number;
  commentData?: CommentData;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
  setTextValue?: Dispatch<SetStateAction<string>>;
}) => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const handleSuccess = (action: string) => {
    switch (action) {
      case "postComment":
        if (!id) {
          throw new Error("Id is undefined");
        }
        queryClient.invalidateQueries({
          queryKey: projectQueryKey.averageRating(id).queryKey,
        });
        queryClient.invalidateQueries({
          queryKey: commentQueryKey.myComment(id).queryKey,
        });
        queryClient.invalidateQueries({
          queryKey: commentQueryKey.list().queryKey,
        });
        addToast("프로젝트 리뷰가 작성되었습니다", "success");
        break;
      case "putComment":
      case "deleteComment":
        if (!id) {
          throw new Error("Id is undefined");
        }
        if (setCurrentPage) {
          // 프로젝트 상세 페이지
          queryClient.invalidateQueries({
            queryKey: projectQueryKey.averageRating(id).queryKey,
          });
        } else if (ratingId) {
          // 댓글 상세 페이지
          if (action === "putComment") {
            queryClient.invalidateQueries({
              queryKey: commentQueryKey.detail(ratingId).queryKey,
            });
          } else if (action === "deleteComment") {
            queryClient.removeQueries({
              queryKey: commentQueryKey.detail(ratingId).queryKey,
            });
          }
        }
        queryClient.invalidateQueries({
          queryKey: commentQueryKey.myComment(id).queryKey,
        });
        queryClient.invalidateQueries({
          queryKey: commentQueryKey.list().queryKey,
        });
        if (setCurrentPage) setCurrentPage(1);
        addToast(`프로젝트 리뷰가 ${action === "deleteComment" ? "삭제" : "수정"}되었습니다`, "success");
        break;
      case "reflyComment":
      case "putReflyComment":
      case "deleteReflyComment":
        queryClient.invalidateQueries({
          queryKey: commentQueryKey.refly().queryKey,
        });
        if (setTextValue) setTextValue("");
        addToast(`댓글이 ${action === "deleteReflyComment" ? "삭제" : "작성"}되었습니다`, "success");
        revalidateTagAction("reflyCommentList");
    }
  };

  const handleError = (error: any) => {
    console.error("Error:", error);
    addToast("오류가 발생했습니다.", "error");
  };

  const postCommentMutation = useMutation({
    mutationFn: () => {
      if (!id) throw new Error("Id is undefined");
      return commentApi.postComment(id, { ...commentData });
    },
    onSuccess: () => handleSuccess("postComment"),
    onError: error => handleError(error),
  });

  const putCommentMutation = useMutation({
    mutationFn: () => {
      if (!ratingId) throw new Error("Rating Id is undefined");
      return commentApi.putComment(ratingId, { ...commentData });
    },
    onSuccess: () => handleSuccess("putComment"),
    onError: error => handleError(error),
  });

  const deleteCommentMutation = useMutation({
    mutationFn: () => {
      if (!ratingId) throw new Error("Rating Id is undefined");
      return commentApi.deleteComment(ratingId);
    },
    onSuccess: () => handleSuccess("deleteComment"),
    onError: error => handleError(error),
  });

  const postReflyCommentMutation = useMutation({
    mutationFn: (comment: string) => {
      if (!ratingId) throw new Error("Rating Id is undefined");
      return commentApi.postReflyComment(ratingId, comment);
    },
    onSuccess: () => handleSuccess("postReflyComment"),
    onError: error => handleError(error),
  });

  const putReflyCommentMutation = useMutation({
    mutationFn: (comment: string) => {
      if (!id) throw new Error("Id is undefined");
      return commentApi.putReflyComment(id, comment);
    },
    onSuccess: () => handleSuccess("putReflyComment"),
    onError: error => handleError(error),
  });

  const deleteReflyCommentMutation = useMutation({
    mutationFn: () => {
      if (!id) throw new Error("Id is undefined");
      return commentApi.deleteReflyComment(id);
    },
    onSuccess: () => handleSuccess("deleteReflyComment"),
    onError: error => handleError(error),
  });

  return {
    postCommentMutation,
    putCommentMutation,
    deleteCommentMutation,
    postReflyCommentMutation,
    putReflyCommentMutation,
    deleteReflyCommentMutation,
  };
};

export default useCommentMutation;
