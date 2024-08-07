import Image from "next/image";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";

const HeaderSkeleton = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-[92px] animate-pulse rounded-lg bg-gray-300" />
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
        <div className="h-5 w-5 animate-pulse">
          <Image src={SmallArrowIcon} alt="유저 옵션." width={20} height={20} priority />
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
