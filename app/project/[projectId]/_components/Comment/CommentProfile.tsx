"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";

interface CommentProfileProps {
  userId: number;
  userName: string;
  userJob: string;
  userProfileImageUrl: string;
}

type JobCategory = keyof typeof JOB_CATEGORIES_KR;

function CommentProfile({ userId, userName, userJob, userProfileImageUrl }: CommentProfileProps) {
  const router = useRouter();

  const handleProfileClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    router.push(`/profile/${userId}`);
  };

  return (
    <div className="flex cursor-pointer items-center gap-2" onClick={handleProfileClick}>
      <ProfileImage imageUrl={userProfileImageUrl || "default"} className="h-10 w-10" />
      <div>
        <p className="text-sm font-semibold">{userName}</p>
        <p className="text-[10px] text-blue-500">{JOB_CATEGORIES_KR[userJob as JobCategory]}</p>
      </div>
    </div>
  );
}

export default CommentProfile;
