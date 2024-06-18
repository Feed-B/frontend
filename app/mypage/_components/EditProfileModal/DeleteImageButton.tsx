import Image from "next/image";
import { twMerge } from "tailwind-merge";
import whiteDeleteIcon from "@/public/icons/whiteDelete.svg";

const deleteButtonStyle = "z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800";

function DeleteImageButton({ onClick, className }: { onClick: () => void; className?: string }) {
  const buttonClass = twMerge(deleteButtonStyle, className);
  return (
    <button onClick={onClick} type="button" className={buttonClass}>
      <Image sizes="fill" src={whiteDeleteIcon} alt="기본 프로필로 변경" />
    </button>
  );
}

export default DeleteImageButton;
