"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import checkCircle from "@/public/icons/checkCircle.svg";
import errorCircle from "@/public/icons/error.svg";
import closeIcon from "@/public/icons/close.svg";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  const [show, setShow] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되면 표시 애니메이션을 시작합니다.
    setShow(true);

    // 3초 후에 토스트를 사라지기 시작하게 설정합니다.
    const hideTimeout = setTimeout(() => {
      setIsExiting(true); // 애니메이션 시작
    }, 3000);

    // 애니메이션이 끝난 후에 onClose 호출
    const onCloseTimeout = setTimeout(() => {
      if (isExiting) {
        onClose();
      }
    }, 3500); // 애니메이션이 끝난 후 추가로 0.5초 후 호출

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(onCloseTimeout);
    };
  }, [isExiting, onClose]);

  const backgroundColor = type === "success" ? "border-blue-500 bg-blue-100" : "border-red-500 bg-red-100";

  return (
    <div
      className={`transform transition-all duration-500 ease-in-out ${show ? (isExiting ? "translate-y-5 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100") : "translate-y-5 scale-95 opacity-0"}  ${backgroundColor} mb-2 flex items-center gap-2 rounded-xl border border-solid p-4`}>
      {type === "success" ? (
        <Image src={checkCircle} alt="성공" width={24} priority />
      ) : (
        <Image src={errorCircle} alt="실패" width={24} priority />
      )}
      <p className="text-gray-900">{message}</p>
      <Image
        src={closeIcon}
        alt="닫기 아이콘"
        width={24}
        height={24}
        priority
        className="absolute right-4 cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};

export default Toast;
