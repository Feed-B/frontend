import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
import ProjectHeader from "./_components/Project/ProjectHeader";
import ProjectArticle from "./_components/Project/ProjectArticle";

function Project() {
  const stackList = ["Javascript", "Typescript", "Java"];
  const linkList = ["https://www.naver.com/", "https://comic.naver.com/index", "https://www.youtube.com/"];
  return (
    <div className="mx-auto flex w-[960px] flex-col">
      <ProjectHeader />
      <hr />
      <ProjectArticle />
      <hr />
      <section className="mt-10">
        <p className="mb-4 text-lg font-bold">팀원</p>
      </section>
      <section className="mt-10">
        <p className="mb-4 text-lg font-bold">사용한 스킬</p>
        <div className="rounded-xl border border-solid border-[#EBEBEB] bg-white p-3">
          <ul className="flex flex-wrap gap-4">
            {stackList.map((stack, i) => {
              const stackItem = FULL_STACK_DATA.find(item => item.name === stack);
              return (
                <li className="flex items-center gap-1" key={i}>
                  <Image src={stackItem?.iamge || ""} alt="기술 스택 이미지." />
                  <p className="text-xs">{stack}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="mt-10">
        <p className="mb-4 text-lg font-bold">추가 링크</p>
        <div className="flex gap-2">
          {linkList.map((link, i) => {
            return (
              <Link
                href={`${link}`}
                target="_blank"
                className="flex items-center gap-1 rounded-xl bg-[#EBECFF] px-3 py-1 text-sm text-[#454545]"
                key={i}>
                {link}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Project;
