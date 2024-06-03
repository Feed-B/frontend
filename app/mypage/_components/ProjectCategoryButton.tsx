import { ReactNode } from "react";

interface CategoryProps {
  children: ReactNode;
  isSelect: boolean;
}

function ProjectCategoryButton({ children, isSelect }: CategoryProps) {
  return (
    <button type="button" className={`${isSelect ? "text-black" : "text-[#d9d9d9]"} text-lg font-bold`}>
      {children}
    </button>
  );
}

export default ProjectCategoryButton;
