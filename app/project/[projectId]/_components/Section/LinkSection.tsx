import React from "react";
import Link from "next/link";

interface LinkListProps {
  linkList: string[];
}

function LinkSection({ linkList }: LinkListProps) {
  return (
    <section className="mt-10">
      <p className="mb-4 text-lg font-bold">추가 링크</p>
      <div className="flex gap-2">
        {linkList.map((link, i) => {
          return (
            <Link
              href={`${link}`}
              target="_blank"
              className="flex items-center gap-1 rounded-xl bg-[#EBECFF] px-3 py-1 text-sm text-[#454545]"
              key={i}>
              {link}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LinkSection;
