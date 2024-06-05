import React from "react";
import Link from "next/link";

interface LinkListProps {
  linkList: {
    id: number;
    url: string;
  }[];
}

function LinkSection({ linkList }: LinkListProps) {
  return (
    <section className="mt-10">
      <p className="mb-4 text-lg font-bold">추가 링크</p>
      <div className="flex gap-2">
        {linkList.map(link => (
          <Link
            href={`${link.url}`}
            target="_blank"
            className="max-w-44 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-xl bg-[#EBECFF] px-3 py-1 text-sm text-[#454545]"
            key={link.id}>
            {link.url}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LinkSection;
