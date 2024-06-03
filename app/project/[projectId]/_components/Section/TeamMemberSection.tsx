import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileIcon from "@/public/icons/defaultProfile.svg";

//mock data
const teamMemberList = [
  {
    id: 1,
    job: "디자인",
    member: [
      {
        id: 1,
        name: "홍길동동",
        url: "https://www.naver.com/",
      },
      {
        id: 2,
        name: "박이름",
        url: "https://www.youtube.com/",
      },
    ],
  },
  {
    id: 2,
    job: "프론트엔드",
    member: [
      {
        id: 1,
        name: "LongName",
        url: "https://www.naver.com/",
      },
    ],
  },
];

function TeamMemberSection() {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-bold">팀원</h3>
      <div className="flex gap-8">
        {teamMemberList.map(team => (
          <div key={team.id}>
            <p className="mb-3 text-sm text-[#1C1C1C]">{team.job}</p>
            <div className="flex gap-3">
              {team.member.map(member => (
                <div key={member.id} className="flex flex-col items-center gap-0.5 text-sm text-[#454545]">
                  {member.url ? (
                    <Link href={member.url} target="_blank">
                      <Image src={profileIcon} alt="프로젝트 팀원 프로필." width={40} />
                    </Link>
                  ) : (
                    <Image src={profileIcon} alt="프로젝트 팀원 프로필." width={40} />
                  )}
                  <p className="w-14 overflow-hidden text-ellipsis whitespace-nowrap text-center">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMemberSection;
