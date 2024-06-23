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
      className="rounded-lg border border-solid border-gray-200 bg-white px-4 py-3 text-sm text-blue-500 active:bg-gray-100">
      {children}
    </button>
  );
}

export default EditProfileButton;
