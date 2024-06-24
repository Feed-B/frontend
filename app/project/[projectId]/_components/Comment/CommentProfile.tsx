import React from "react";
import Link from "next/link";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";

interface CommentProfileProps {
  userId: number;
  userName: string;
  userJob: string;
}

function CommentProfile({ userId, userName, userJob }: CommentProfileProps) {
  return (
    <Link href={`/profile/${userId}`}>
      <div className="flex items-center gap-2">
        <ProfileImage imageUrl="default" className="h-10 w-10" />
        <div>
          <p className="text-sm font-semibold">{userName}</p>
          <p className="text-[10px] text-blue-500">{userJob}</p>
        </div>
      </div>
    </Link>
  );
}

export default CommentProfile;
