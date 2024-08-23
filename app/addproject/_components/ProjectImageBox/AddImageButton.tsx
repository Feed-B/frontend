import Image from "next/image";
import addPhotoIcon from "@/public/icons/addPhoto.svg";

interface AddImageButtonProps {
  count: number;
  onClick: () => void;
}

function AddImageButton({ count, onClick }: AddImageButtonProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-500 bg-white hover:bg-blue-50 mb:h-[72px] mb:w-[72px] tbc:h-[72px] tbc:w-[72px] tbr:h-[124px] tbr:w-[124px] pc:hidden"
      onClick={onClick}>
      <div className="flex flex-col items-center text-center">
        <Image className="mx-auto" src={addPhotoIcon} width={22} alt="이미지 추가 버튼" />
        <span className="text-sm font-medium text-gray-900 mb:text-[10.5px] tbc:text-[10.5px]">({count}/5)</span>
      </div>
    </div>
  );
}

export default AddImageButton;
