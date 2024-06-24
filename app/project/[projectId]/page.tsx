import React from "react";
import ProjectHeader from "./_components/Project/ProjectHeader";
import ProjectArticle from "./_components/Project/ProjectArticle";
import TeamMemberSection from "./_components/ProjectSection/TeamMemberSection";
import StackSection from "./_components/ProjectSection/StackSection";
import RatingSection from "./_components/ProjectSection/RatingSection";
import MyCommentSection from "./_components/CommentSection/MyCommentSection";
import CommentListSection from "./_components/CommentSection/CommentListSection";

interface Props {
  params: {
    projectId: number;
  };
}

function Project({ params }: Props) {
  return (
    <main className="mx-auto my-16 flex w-[1200px] flex-col gap-12">
      <div className="flex flex-col gap-10">
        <ProjectHeader projectId={params.projectId} />
        <ProjectArticle projectId={params.projectId} />
        <TeamMemberSection projectId={params.projectId} />
        <StackSection projectId={params.projectId} />
        <RatingSection projectId={params.projectId} />
      </div>
      <div>
        <MyCommentSection projectId={params.projectId} />
        <CommentListSection projectId={params.projectId} />
      </div>
    </main>
  );
}

export default Project;
