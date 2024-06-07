import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { DropDownLinkProps, DropDownProps } from "@/app/_types/DropDownType";

function DropDown({ children, className, ref }: DropDownProps) {
  const DefaultDropDownClass =
    "absolute z-50 rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm text-black";
  const DropDownClass = twMerge(DefaultDropDownClass, className);

  return (
    <div ref={ref} className={DropDownClass}>
      {children}
    </div>
  );
}

function LinkItem({ children, className, href }: DropDownLinkProps) {
  const DefaultLinkItemClass = "block cursor-pointer p-2 text-black font-semibold hover:bg-[#F8FAFB]";
  const LinkItemClass = twMerge(DefaultLinkItemClass, className);

  return (
    <Link href={href} className={LinkItemClass}>
      {children}
    </Link>
  );
}

function TextItem({ children, className, onClick }: DropDownProps) {
  const DefaultTextItemClass = "cursor-pointer p-2 text-black font-semibold hover:bg-[#F8FAFB]";
  const TextItemClass = twMerge(DefaultTextItemClass, className);

  return (
    <p className={TextItemClass} onClick={onClick}>
      {children}
    </p>
  );
}

function HR() {
  return <hr className="m-1 border-[0.5px] border-solid border-gray-300" />;
}

DropDown.LinkItem = LinkItem;
DropDown.TextItem = TextItem;
DropDown.HR = HR;

export default DropDown;
