import { JobCategoriesType } from "@/app/_constants/JobCategoryData";

function JobBadge({ job }: { job: JobCategoriesType }) {
  return <div className="rounded bg-gray-100 p-1 text-[10px] text-blue-500">{job}</div>;
}

export default JobBadge;
