import React from "react";
import Image from "next/image";
import defaultProfileImage from "@/public/icons/defaultProfile.svg";

function Profile() {
  return (
    <div className="flex items-center justify-center ">
      <Image src={defaultProfileImage} alt="profile" width={36} priority />
    </div>
  );
}

export default Profile;
