import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_components/Button/Button";
import angryFeedB from "@/public/beeIcons/redBee.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex w-[300px] flex-col items-center justify-center gap-3 text-center">
          <Image width={196} src={angryFeedB} alt="붉은 피드비 로고" className="mb-12" />
          <h1 className="text-2xl font-bold text-gray-900">페이지를 찾을 수 없습니다</h1>
          <div>
            <p className="text-gray-700">찾고 계시는 댓글 페이지를 찾을 수 없습니다.</p>
            <p className="text-gray-700">메인 페이지로 이동해서 다시 시도해주세요.</p>
          </div>
          <Link href={"/main"}>
            <Button bgColor="yellow" buttonSize="normal">
              메인으로 이동하기
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
export default NotFound;
