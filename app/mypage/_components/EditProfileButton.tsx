import { ReactNode } from "react";

interface EditProfileButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function EditProfileButton({ children, onClick }: EditProfileButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-solid border-[#ebebeb] bg-white px-4 py-3 text-base text-[#3C67E7] active:bg-[#f4f4f4]">
      {children}
    </button>
  );
}

export default EditProfileButton;
