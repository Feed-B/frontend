export type Job =
  | "프론트엔드"
  | "백엔드"
  | "디자이너"
  | "IOS"
  | "안드로이드"
  | "데브옵스"
  | "기획자"
  | "풀스택"
  | "기타";

function JobBadge({ job }: { job: Job }) {
  return <div className="rounded bg-gray-100 p-1 text-[10px] text-blue-500">{job}</div>;
}

export default JobBadge;
