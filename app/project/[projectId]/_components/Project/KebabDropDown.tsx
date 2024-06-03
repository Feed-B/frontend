"use client";

import React from "react";
import Link from "next/link";

interface KebabDropDownProps {
  projectId: number;
}

function KebabDropDown({ projectId }: KebabDropDownProps) {
  return (
    <div className="absolute right-4 top-12 rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm">
      <Link className="block cursor-pointer p-2" href={`${projectId}/edit`}>
        수정
      </Link>
      {/* 삭제 모달 띄울 지 얘기해보기 */}
      <Link className="block cursor-pointer p-2" href={"/"}>
        삭제
      </Link>
    </div>
  );
}

export default KebabDropDown;
