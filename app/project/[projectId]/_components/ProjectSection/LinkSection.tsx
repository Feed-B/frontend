import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TOOL } from "@/app/_constants/LinkData";

interface LinkListProps {
  linkList: {
    id: number;
    tool: string;
    url: string;
  }[];
}

function LinkSection({ linkList }: LinkListProps) {
  return (
    <section>
      <p className="mb-2 text-sm font-semibold">추가 링크</p>
      <div className="flex gap-2">
        {linkList.map(link => {
          const linkItem = TOOL.find(item => item.name === link.tool);
          return (
            <div className="rounded-full border border-solid border-gray-900 p-0.5" key={link.id}>
              <Link href={`${link.url}`} target="_blank">
                <Image src={linkItem?.image || ""} alt="추가 링크 이미지." width={18} priority />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LinkSection;
