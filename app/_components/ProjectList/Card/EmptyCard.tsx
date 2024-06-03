import Image from "next/image";
import emptyFileIcon from "@/public/icons/emptyFile.svg";

function EmptyCard() {
  return (
    <div className="absolute left-1/2 flex -translate-x-1/2  flex-col items-center justify-center gap-6">
      <Image width={54} height={72} src={emptyFileIcon} alt="파일 없음" />
      <p className="text-xl font-semibold text-[#8B8B8B]">프로젝트 목록이 없어요.</p>
    </div>
  );
}

export default EmptyCard;
