"use client";

import { useGetStack } from "../../_context/StackProvider";

function SortFilter() {
  const { projectState, isChangeCondition } = useGetStack();
  console.log(projectState);

  return (
    <div className="flex h-6 items-center gap-3">
      <button
        className={`border-r border-solid pr-2 text-lg font-bold leading-4 ${projectState.sortCondition === "RECENT" ? "text-[#3F3F3F]" : "text-gray-400"}`}
        onClick={() => isChangeCondition("RECENT")}>
        최신순
      </button>
      <button
        className={`border-r border-solid pr-2 text-lg font-bold leading-4 ${projectState.sortCondition === "LIKES" ? "text-[#3F3F3F]" : "text-gray-400"}`}
        onClick={() => isChangeCondition("LIKES")}>
        좋아요순
      </button>
      <button
        className={`text-lg font-bold ${projectState.sortCondition === "VIEWS" ? "text-[#3F3F3F]" : "text-gray-400"}`}
        onClick={() => isChangeCondition("VIEWS")}>
        조회순
      </button>
    </div>
  );
}

export default SortFilter;
