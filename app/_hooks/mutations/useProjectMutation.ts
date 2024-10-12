import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { addProjectApi, editProjectApi, likeProjectApi, projectApi } from "@/app/_apis/projectApi";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { useToast } from "@/app/_context/ToastContext";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";

const useProjectMutation = (projectId?: number) => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();
  const router = useRouter();

  const likeMutation = useMutation({
    mutationFn: () => {
      if (!projectId) {
        throw new Error("Project Id is undefined");
      }
      return likeProjectApi.postLikeProject({ projectId });
    },
  });

  const unLikeMutation = useMutation({
    mutationFn: () => {
      if (!projectId) {
        throw new Error("Project Id is undefined");
      }
      return likeProjectApi.deleteLikeProject({ projectId });
    },
  });

  const projectPostViewMutation = useMutation({
    mutationFn: () => {
      if (!projectId) {
        throw new Error("Project Id is undefined");
      }
      return projectApi.postProjectView(projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.list().queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });

  const projectDeleteMutation = useMutation({
    mutationFn: () => {
      if (!projectId) {
        throw new Error("Project Id is undefined");
      }
      return projectApi.deleteProject(projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.list().queryKey,
      });
      addToast("프로젝트가 삭제되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 삭제 오류가 발생했습니다", "error");
    },
  });

  const postMutation = useMutation({
    mutationFn: (projectData: FormData) => addProjectApi.postProject(projectData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.list().queryKey,
      });
      revalidateTagAction("pojectList");
      router.push("/main");
      addToast("프로젝트가 생성되었습니다", "success");
    },
    onError: () => {
      addToast("프로젝트 생성에 실패했습니다", "error");
    },
  });

  const putMutation = useMutation({
    mutationFn: (projectData: FormData) => {
      if (!projectId) {
        throw new Error("Project Id is undefined");
      }
      return editProjectApi.putProject(projectId, projectData);
    },
    onSuccess: () => {
      if (!projectId) {
        throw new Error("Project Id is undefined");
      }
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.detail(projectId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.teamMember(projectId).queryKey,
      });
      revalidateTagAction("projectDetail");
      revalidateTagAction("projectTeamMember");
      router.push(`/project/${projectId}`);
      addToast("프로젝트가 수정되었습니다", "success");
    },
    onError: () => {
      addToast("프로젝트 수정에 실패했습니다", "error");
    },
  });

  return { likeMutation, unLikeMutation, projectPostViewMutation, projectDeleteMutation, postMutation, putMutation };
};

export default useProjectMutation;