import Button from "@/app/_components/Button/Button";

interface ProgressBoxProps {
  progress: number;
  openCancelModal: () => void;
}

function ProgressBox({ progress, openCancelModal }: ProgressBoxProps) {
  const markerPosition = 86;

  return (
    <div className="fixed bottom-0 left-0 z-40 flex h-36 w-full items-center justify-center bg-gray-100 px-5 py-4 tbc:h-32 tbr:h-24 pc:h-24 pc:px-20">
      <div className="flex flex-col items-center justify-start gap-4 mb:gap-2 tbr:flex-row pc:w-[1200px] pc:flex-row pc:justify-between">
        <div className="flex items-center gap-6 mb:gap-3">
          <div className="relative">
            <div className="relative h-3 w-96 overflow-hidden rounded-2xl bg-gray-200 mb:w-40 tbc:w-72 tbr:h-4 pc:h-5">
              <div
                className="relative flex h-full rounded-2xl bg-yellow-500 transition-all duration-300"
                style={{ width: `${progress}%` }}>
                <div className="absolute right-0 h-full w-5 rounded-2xl bg-yellow-600" />
              </div>
              <div
                className="absolute top-0 h-full border-r-2 border-dashed border-blue-500"
                style={{ left: `${markerPosition}%` }}
              />
            </div>
            <span className="absolute left-0 text-xs font-bold text-gray-500 mb:text-[10px]">0</span>
            <span className="absolute right-0 text-xs font-bold text-gray-500 mb:text-[10px]">100</span>
          </div>
          <div className="items-center text-sm font-semibold text-gray-700 mb:text-xs">
            정보를 상세하게 작성할수록 <span className="text-blue-500">양질의 피드백을 받을 수 있어요</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button buttonSize="normal" bgColor="gray" className="h-12 w-32" onClick={openCancelModal}>
            취소
          </Button>
          <Button
            type="submit"
            buttonSize="normal"
            bgColor={progress < 88 ? "gray" : "yellow"}
            className={`h-12 w-32 ${progress < 88 && "bg-gray-300 text-gray-500 hover:bg-gray-300"}`}
            disabled={progress < 88}>
            공유하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProgressBox;
