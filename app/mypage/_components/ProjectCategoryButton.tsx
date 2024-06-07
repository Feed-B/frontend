import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelect: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ProjectCategoryButton({ children, isSelect, onClick, id }: CategoryProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      id={id}
      className={`${isSelect ? "rounded-lg bg-gray-100 text-black" : "text-gray-400"} flex justify-between px-3 py-2 text-sm`}>
      {children}
    </button>
  );
}

export default ProjectCategoryButton;
