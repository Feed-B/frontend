import { JobType } from "@/app/_apis/ProfileAPI";

function JobBadge({ job }: { job: JobType | undefined }) {
  return <div className="rounded bg-gray-100 p-1 text-[10px] text-blue-500">{job}</div>;
}

export default JobBadge;
