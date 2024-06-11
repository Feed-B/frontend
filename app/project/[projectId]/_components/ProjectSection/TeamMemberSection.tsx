import React from "react";
import Link from "next/link";
//mock data
const teamMemberList = [
  {
    id: 1,
    job: "디자인",
    member: [
      {
        id: 1,
        name: "홍길동동",
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
        name: "일이삼사오육칠팔",
        url: "https://www.naver.com/",
      },
    ],
  },
];

function TeamMemberSection() {
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold">팀원</h3>
      <div className="flex gap-6">
        {teamMemberList.map(team => (
          <div className="flex gap-3" key={team.id}>
            <p className="rounded bg-gray-100 p-1 text-sm font-semibold text-blue-500">{team.job}</p>
            <div className="flex items-center gap-2 text-sm">
              {team.member.map(member => (
                <div key={member.id}>
                  {member.url ? (
                    <Link href={member.url} target="_blank">
                      <p className="font-bold">{member.name}</p>
                    </Link>
                  ) : (
                    <p>{member.name}</p>
                  )}
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
