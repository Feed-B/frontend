import Image from "next/image";
import eyeIcon from "@/public/icons/eye.svg";

function ViewCount({ viewCount }: { viewCount: number | string }) {
  return (
    <div className="flex gap-1.5">
      <Image width={25} src={eyeIcon} alt="조회수" />
      <span className="text-sm font-semibold text-[#656565]">{viewCount}</span>
    </div>
  );
}

export default ViewCount;
