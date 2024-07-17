import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { DropDownLinkProps, DropDownProps } from "@/app/_types/DropDownType";

function DropDown({ children, className, itemRef }: DropDownProps) {
  const DefaultDropDownClass =
    "absolute rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 z-10 shadow-custom-shadow";
  const DropDownClass = twMerge(DefaultDropDownClass, className);

  return (
    <div ref={itemRef} className={DropDownClass}>
      {children}
    </div>
  );
}

function LinkItem({ children, className, href }: DropDownLinkProps) {
  const DefaultLinkItemClass =
    "text-nowrap block cursor-pointer p-2 text-gray-900 font-semibold hover:bg-gray-100 rounded";
  const LinkItemClass = twMerge(DefaultLinkItemClass, className);

  return (
    <Link href={href} className={LinkItemClass}>
      {children}
    </Link>
  );
}

function TextItem({ children, className, onClick }: DropDownProps) {
  const DefaultTextItemClass = "text-nowrap cursor-pointer p-2 text-gray-900 font-semibold hover:bg-gray-100 rounded";
  const TextItemClass = twMerge(DefaultTextItemClass, className);

  return (
    <p className={TextItemClass} onClick={onClick}>
      {children}
    </p>
  );
}

function HR() {
  return <hr className="m-1" />;
}

function SocialItem({ children, className, onClick }: DropDownProps) {
  const DefaultTextItemClass =
    "text-nowrap cursor-pointer p-2 font-semibold flex flex-col justify-center items-center gap-2 text-gray-900 text-xs";
  const TextItemClass = twMerge(DefaultTextItemClass, className);

  return (
    <div className={TextItemClass} onClick={onClick}>
      {children}
    </div>
  );
}

DropDown.LinkItem = LinkItem;
DropDown.TextItem = TextItem;
DropDown.HR = HR;
DropDown.SocialItem = SocialItem;

export default DropDown;
