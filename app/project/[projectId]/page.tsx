import React from "react";
import ProjectHeader from "./_components/ProjectHeader";
import ProjectArticle from "./_components/ProjectArticle";

function Project() {
  return (
    <div className="mx-auto flex w-[960px] flex-col">
      <ProjectHeader />
      <hr />
      <ProjectArticle />
      <hr />
    </div>
  );
}

export default Project;
