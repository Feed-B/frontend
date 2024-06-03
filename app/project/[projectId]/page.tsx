import React from "react";
import ProjectHeader from "./_components/Project/ProjectHeader";
import ProjectArticle from "./_components/Project/ProjectArticle";
import TeamMemberSection from "./_components/ProjectSection/TeamMemberSection";
import StackSection from "./_components/ProjectSection/StackSection";
import LinkSection from "./_components/ProjectSection/LinkSection";
import RatingSection from "./_components/ProjectSection/RatingSection";
import WriteCommentSection from "./CommentSection/WriteCommentSection";

const stackList = ["Javascript", "Typescript", "Java"];
const linkList = [
  { id: 1, url: "https://www.naver.com/" },
  { id: 2, url: "https://comic.naver.com/index" },
  { id: 3, url: "https://www.youtube.com/" },
];

function Project() {
  return (
    <main className="mx-auto my-8 flex w-[960px] flex-col gap-16">
      <div>
        <ProjectHeader />
        <hr />
        <ProjectArticle />
        <hr />
        <TeamMemberSection />
        <StackSection stackList={stackList} />
        <LinkSection linkList={linkList} />
      </div>
      <RatingSection />
      <WriteCommentSection />
    </main>
  );
}

export default Project;
