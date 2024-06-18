import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import defaultProfileImage from "@/public/icons/defaultProfile.svg";

function ProfileImage({ imageUrl = "default", className }: { imageUrl: string | StaticImageData; className?: string }) {
  const DefaultProfileClass = "relative overflow-hidden rounded-full";
  const ProfileClass = twMerge(DefaultProfileClass, className);

  return (
    <div className={ProfileClass}>
      <Image sizes="fill" src={imageUrl === "default" ? defaultProfileImage : imageUrl} alt="프로필 이미지" />
    </div>
  );
}

export default ProfileImage;
