import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes, MouseEvent } from "react";
import { MY_PAGE_TEXT } from "./constant";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelect: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  id: string;
  icon: StaticImageData | string;
  text: "MY_PROJECT" | "WISH_PROJECT";
  count: string;
}

function ProjectCategoryButton({ isSelect, onClick, id, icon, text, count }: CategoryProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      id={id}
      className={`${isSelect ? "rounded-lg bg-gray-100 text-black" : "text-gray-400"} flex justify-between px-3 py-2 text-sm`}>
      <div className="flex items-center gap-2.5">
        <Image width={24} src={icon} alt={MY_PAGE_TEXT[text] + " 보기"} priority />
        <p>{MY_PAGE_TEXT[text]}</p>
      </div>
      <p>{count}</p>
    </button>
  );
}

export default ProjectCategoryButton;
