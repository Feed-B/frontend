import React from "react";
import Image from "next/image";
import profileIcon from "@/public/icons/profile.svg";

function Profile() {
  return (
    <div className="custom-width flex h-9 w-9 flex-row items-center justify-center rounded-full bg-gray-200">
      <Image src={profileIcon} alt="profile" width={20} priority />
    </div>
  );
}

export default Profile;
