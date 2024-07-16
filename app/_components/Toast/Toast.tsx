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

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 500); // CSS 애니메이션 시간이랑 맞추기 위해 딜레이
    }, 3000); // 3초 후 자동으로 닫힘

    return () => clearTimeout(timer);
  }, [onClose]);

  const backgroundColor = type === "success" ? "border-blue-500 bg-blue-100" : "border-red-500 bg-red-100";

  return (
    <div
      className={`transform transition-all duration-500 ease-in-out ${show ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-95 opacity-0"} ${backgroundColor} mb-2 flex items-center gap-2 rounded-xl border border-solid p-4`}>
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
