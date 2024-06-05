import Image from "next/image";
import eyeIcon from "@/public/icons/eye.svg";

function ViewCount({ viewCount }: { viewCount: number | string }) {
  return (
    <div className="flex gap-1.5">
      <Image width={16} src={eyeIcon} alt="조회수" />
      <p className="text-xs font-semibold text-[#656565]">{viewCount}</p>
    </div>
  );
}

export default ViewCount;
