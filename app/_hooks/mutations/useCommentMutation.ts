import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { commentApi } from "@/app/_apis/commentApi";
import { useToast } from "@/app/_context/ToastContext";
import { commentQueryKey } from "@/app/_queryFactory/commentQuery";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";

const useCommentMutation = ({
  id,
  ratingId,
  commentData,
  setCurrentPage,
  setTextValue,
}: {
  id?: number;
  ratingId?: number;
  commentData?: any;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
  setTextValue?: Dispatch<SetStateAction<string>>;
}) => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const postCommentMutation = useMutation({
    mutationFn: () => {
      if (!id) {
        throw new Error("Id is undefined");
      }
      return commentApi.postComment(id, { ...commentData });
    },
    onSuccess: () => {
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
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 작성이 실패했습니다.", "error");
    },
  });

  const putCommentMutation = useMutation({
    mutationFn: () => {
      if (!ratingId) {
        throw new Error("Rating Id is undefined");
      }
      return commentApi.putComment(ratingId, { ...commentData });
    },
    onSuccess: () => {
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
        queryClient.invalidateQueries({
          queryKey: commentQueryKey.detail(ratingId).queryKey,
        });
      }
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.myComment(id).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.list().queryKey,
      });
      if (setCurrentPage) setCurrentPage(1);
      addToast("프로젝트 리뷰가 수정되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 수정이 실패했습니다.", "error");
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: () => {
      if (!ratingId) {
        throw new Error("Rating Id is undefined");
      }
      return commentApi.deleteComment(ratingId);
    },
    onSuccess: () => {
      if (!id) {
        throw new Error("Id is undefined");
      }
      if (setCurrentPage) {
        queryClient.invalidateQueries({
          // 프로젝트 상세 페이지
          queryKey: projectQueryKey.averageRating(id).queryKey,
        });
      } else if (ratingId) {
        queryClient.removeQueries({
          // 댓글 상세 페이지
          queryKey: commentQueryKey.detail(ratingId).queryKey,
        });
      }
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.myComment(id).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.list().queryKey,
      });
      if (setCurrentPage) setCurrentPage(1);
      addToast("프로젝트 리뷰가 삭제되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 리뷰 삭제 오류가 발생했습니다", "error");
    },
  });

  const postReflyCommentMutation = useMutation({
    mutationFn: (comment: string) => {
      if (!ratingId) {
        throw new Error("Rating Id is undefined");
      }
      return commentApi.postReflyComment(ratingId, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.refly().queryKey,
      });
      if (setTextValue) setTextValue("");
      addToast("댓글이 생성되었습니다", "success");
      revalidateTagAction("reflyCommentList");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("댓글이 생성 오류가 발생했습니다", "error");
    },
  });

  const putReflyCommentMutation = useMutation({
    mutationFn: (comment: string) => {
      if (!id) {
        throw new Error("Id is undefined");
      }
      return commentApi.putReflyComment(id, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.refly().queryKey,
      });
      if (setTextValue) setTextValue("");
      addToast("댓글이 수정되었습니다", "success");
      revalidateTagAction("reflyCommentList");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("댓글이 수정 오류가 발생했습니다", "error");
    },
  });

  const deleteReflyCommentMutation = useMutation({
    mutationFn: async () => {
      if (!id) {
        throw new Error("Id is undefined");
      }
      const response = await commentApi.deleteReflyComment(id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentQueryKey.refly().queryKey,
      });
      addToast("댓글이 삭제되었습니다", "success");
      revalidateTagAction("reflyCommentList");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("댓글이 삭제 오류가 발생했습니다", "error");
    },
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
