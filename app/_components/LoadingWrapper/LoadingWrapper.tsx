"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import feedbee from "@/public/icons/feedbee.svg";

interface props {
  children?: ReactNode;
}

function LoadingWrapper({ children }: props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); // 로딩 상태 해제
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <Image src={feedbee} alt="피드비 로고" priority />
          <BounceLoader loading={true} size={60} color="#FDCB07" />
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default LoadingWrapper;
