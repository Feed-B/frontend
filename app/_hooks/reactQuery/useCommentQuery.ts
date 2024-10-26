import { QueryClient, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { commentListApi } from "@/app/_apis/commentListApi";
import { commentQueryKey } from "@/app/_queryFactory/commentQuery";
import { CommentListParams, ReflyCommentListParams } from "@/app/_types/CommentListType";
import { CommentResponse, MyCommentResponse, ReflyCommentResponse } from "@/app/_apis/schema/commentResponse";
import { CommentListResponse } from "@/app/_apis/schema/commentListResponse";
import { commentApi } from "@/app/_apis/commentApi";

/** 댓글 리스트 */
// 댓글 리스트 조회
export const useCommentList = (props: CommentListParams) => {
  const query = useQuery<CommentListResponse, Error>({
    queryKey: commentQueryKey.list().queryKey,
    queryFn: async () => await commentListApi.getCommentList(props),
  });
  return query;
};

// 대댓글 리스트 조회
export const useReflyCommentList = (props: ReflyCommentListParams) => {
  const query = useQuery<ReflyCommentResponse, Error>({
    queryKey: commentQueryKey.refly().queryKey,
    queryFn: async () => await commentListApi.getReflyCommentList(props),
  });
  return query;
};

// 대댓글 무한 스크롤 조회
export const useInfinityReflyCommentList = (props: ReflyCommentListParams) => {
  const query = useInfiniteQuery({
    queryKey: commentQueryKey.refly().queryKey,
    queryFn: async ({ pageParam = 1 }) =>
      await commentListApi.getReflyCommentList({ ratingId: props.ratingId, page: pageParam, size: props.size }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });
  return query;
};

/** 댓글 상세 조회 */
// 댓글 상세 조회
export const useCommentDetail = (ratingId: number) => {
  const query = useQuery<CommentResponse, Error>({
    queryKey: commentQueryKey.detail(ratingId).queryKey,
    queryFn: async () => await commentApi.getComment(ratingId),
  });
  return query;
};

// 내가 남긴 댓글 조회
export const useMyComment = (projectId: number, isLoggedIn: boolean) => {
  const query = useQuery<MyCommentResponse, Error>({
    queryKey: commentQueryKey.myComment(projectId).queryKey,
    queryFn: async () => await commentApi.getMyComment(projectId),
    enabled: !!isLoggedIn,
  });
  return query;
};

/** Prefetch */
// 대댓글 리스트 조회
export const usePrefetchReflyCommentList = (queryClient: QueryClient, props: ReflyCommentListParams) => {
  const query = queryClient.prefetchInfiniteQuery({
    queryKey: commentQueryKey.refly().queryKey,
    queryFn: async () =>
      await commentListApi.getReflyCommentList({
        projectId: props.projectId,
        ratingId: props.ratingId,
        page: props.page,
        size: props.size,
      }),
    initialPageParam: 1 as never,
    getNextPageParam: (lastPage: any) => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });
  return query;
};

// 댓글 상세 조회
export const usePrefetchCommentDetail = (queryClient: QueryClient, ratingId: number) => {
  const query = queryClient.prefetchQuery({
    queryKey: commentQueryKey.detail(ratingId).queryKey,
    queryFn: async () => await commentApi.getComment(ratingId),
  });
  return query;
};
