import React from "react";
import ProjectHeader from "./_components/Project/ProjectHeader";
import ProjectArticle from "./_components/Project/ProjectArticle";
import TeamMemberSection from "./_components/Section/TeamMemberSection";
import StackSection from "./_components/Section/StackSection";
import LinkSection from "./_components/Section/LinkSection";

function Project() {
  const stackList = ["Javascript", "Typescript", "Java"];
  const linkList = ["https://www.naver.com/", "https://comic.naver.com/index", "https://www.youtube.com/"];
  return (
    <div className="mx-auto my-8 flex w-[960px] flex-col">
      <ProjectHeader />
      <hr />
      <ProjectArticle />
      <hr />
      <TeamMemberSection />
      <StackSection stackList={stackList} />
      <LinkSection linkList={linkList} />
    </div>
  );
}

export default Project;
