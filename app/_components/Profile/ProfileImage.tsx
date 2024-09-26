import Image from "next/image";
import { twMerge } from "tailwind-merge";
import defaultProfileImage from "@/public/icons/defaultProfile.svg";

function ProfileImage({ imageUrl = "default", className }: { imageUrl: string | undefined; className?: string }) {
  const DefaultProfileClass = "relative overflow-hidden rounded-full";
  const ProfileClass = twMerge(DefaultProfileClass, className);

  return (
    <div className={ProfileClass}>
      <Image
        fill
        src={imageUrl === "default" ? defaultProfileImage : imageUrl}
        alt="프로필 이미지"
        sizes="(max-width: 36px)"
        priority
      />
    </div>
  );
}

export default ProfileImage;
