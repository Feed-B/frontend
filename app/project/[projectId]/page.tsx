import React from "react";
import { revalidatePathAction } from "@/app/_utils/revalidationAction";
import ProjectHeader from "./_components/ProjectSection/ProjectHeader";
import ProjectArticle from "./_components/ProjectSection/ProjectArticle";
import TeamMemberSection from "./_components/ProjectSection/TeamMemberSection";
import StackSection from "./_components/ProjectSection/StackSection";
import RatingSection from "./_components/ProjectSection/RatingSection";
import MyCommentSection from "./_components/MyComment/MyCommentSection";
import CommentListSection from "./_components/CommentList/CommentListSection";
import CurrentPageProvider from "./_context/CurrentPageProvider";

interface Props {
  params: {
    projectId: number;
  };
}

function Project({ params }: Props) {
  revalidatePathAction(`project/${params.projectId}`);

  return (
    <main className="mx-auto my-16 flex max-w-[1200px] flex-col gap-20 mb:my-9 mb:gap-8 tbc:my-9 tbc:gap-8">
      <div className="flex flex-col gap-10 px-8 mb:gap-8 mb:px-5 tbc:gap-8 tbc:px-5">
        <ProjectHeader projectId={params.projectId} />
        <ProjectArticle projectId={params.projectId} />
        <TeamMemberSection projectId={params.projectId} />
        <StackSection projectId={params.projectId} />
        <RatingSection projectId={params.projectId} />
      </div>
      <div className="flex flex-col gap-8 px-5 pc:px-0">
        <CurrentPageProvider>
          <MyCommentSection projectId={params.projectId} />
          <CommentListSection projectId={params.projectId} />
        </CurrentPageProvider>
      </div>
    </main>
  );
}

export default Project;
