"use client";

import React, { MouseEvent, useState } from "react";

function SortFilter() {
  const [SortState, setSortState] = useState<string>("최신순");

  const isChangeSort = (e: MouseEvent<HTMLButtonElement>) => {
    setSortState(e.currentTarget.textContent || "");
  };

  return (
    <div className="flex h-6 flex-row items-center gap-3">
      <button
        className={`border-r border-solid pr-2 text-lg font-bold leading-4 ${SortState === "최신순" ? "text-[#3F3F3F]" : "text-gray-400"}`}
        onClick={isChangeSort}>
        최신순
      </button>
      <button
        className={`border-r border-solid pr-2 text-lg font-bold leading-4 ${SortState === "좋아요순" ? "text-[#3F3F3F]" : "text-gray-400"}`}
        onClick={isChangeSort}>
        좋아요순
      </button>
      <button
        className={`text-lg font-bold ${SortState === "조회순" ? "text-[#3F3F3F]" : "text-gray-400"}`}
        onClick={isChangeSort}>
        조회순
      </button>
    </div>
  );
}

export default SortFilter;
