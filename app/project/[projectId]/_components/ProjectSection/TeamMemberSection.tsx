"use client";

import React from "react";
import Link from "next/link";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TeamMemberResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";

interface Props {
  projectId: number;
}

type JobCategory = keyof typeof JOB_CATEGORIES_KR;

function TeamMemberSection({ projectId }: Props) {
  const { data: teamMember }: UseQueryResult<TeamMemberResponse, Error> = useQuery(
    projectQueryKeys.teamMember(projectId)
  );
  if (!teamMember) return null;

  return (
    <section>
      <h3 className="mb-4 text-base font-bold pc:text-lg pc:font-semibold">팀원</h3>
      <div className="flex flex-wrap gap-x-6 overflow-hidden">
        {teamMember.map((team, index) => (
          <div className="flex gap-3" key={index}>
            <p className="text-nowrap p-1 text-sm font-semibold text-blue-400">
              {JOB_CATEGORIES_KR[team.job as JobCategory]}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-900">
              {team.teammateList.map(member => (
                <div key={member.id}>
                  {member.url ? (
                    <Link href={member.url} target="_blank">
                      <p className="text-nowrap font-medium underline">{member.teammateName}</p>
                    </Link>
                  ) : (
                    <p className="text-nowrap font-medium">{member.teammateName}</p>
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
