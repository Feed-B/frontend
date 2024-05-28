import Image, { StaticImageData } from "next/image";
import defaultProfileImage from "@/public/icons/default-profile.svg";

function ProfileImage({ imageUrl }: { imageUrl: string | StaticImageData }) {
  return (
    <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full">
      <Image fill src={imageUrl ? imageUrl : defaultProfileImage} alt="프로필 이미지" />
    </div>
  );
}

export default ProfileImage;
