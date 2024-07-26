"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import feedbee from "@/public/beeIcons/yellowBee.svg";

interface props {
  children?: ReactNode;
  loadingTime?: number;
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
          <BeatLoader loading={true} color="#FDCB07" speedMultiplier={5} />
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default LoadingWrapper;
