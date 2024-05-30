import Image, { StaticImageData } from "next/image";
import defaultProfileImageIcon from "@/public/icons/defaultProfileImage.svg";

function ProfileImage({ imageUrl }: { imageUrl: string | StaticImageData }) {
  return (
    <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full">
      <Image fill src={imageUrl ? imageUrl : defaultProfileImageIcon} alt="프로필 이미지" />
    </div>
  );
}

export default ProfileImage;
