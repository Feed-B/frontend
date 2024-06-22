"use client";

import React from "react";
import Link from "next/link";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TeamMemberResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";

interface Props {
  projectId: number;
}

function TeamMemberSection({ projectId }: Props) {
  const { data: teamMember }: UseQueryResult<TeamMemberResponse, Error> = useQuery(
    projectQueryKeys.teamMember(projectId)
  );
  if (!teamMember) return null;

  console.log("teamMember", teamMember);

  return (
    <section className="px-8">
      <h3 className="mb-4 text-lg font-semibold">팀원</h3>
      <div className="flex gap-6">
        {teamMember.map((team, index) => (
          <div className="flex gap-3" key={index}>
            <p className="p-1 text-sm font-semibold text-blue-400">{team.job}</p>
            <div className="flex items-center gap-2 text-sm text-gray-900">
              {team.teammateList.map(member => (
                <div key={member.id}>
                  {member.url ? (
                    <Link href={member.url} target="_blank">
                      <p className="font-medium underline">{member.teammateName}</p>
                    </Link>
                  ) : (
                    <p>{member.teammateName}</p>
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
