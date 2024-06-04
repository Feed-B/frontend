import Link from "next/link";
import React from "react";
import { DropDownButtonProps, DropDownLinkProps, DropDownProps } from "@/app/_types/DropDownType";

function DropDown({ children, onClick }: DropDownProps) {
  return (
    <div className="flex cursor-pointer items-center gap-2" onClick={onClick}>
      {children}
    </div>
  );
}

function ToggleButton({ children, className }: DropDownButtonProps) {
  return <button className={className}>{children}</button>;
}

function List({ children, className }: DropDownProps) {
  return <div className={className}>{children}</div>;
}

function LinkItem({ children, className, href }: DropDownLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function TextItem({ children, className }: DropDownProps) {
  return <p className={className}>{children}</p>;
}

function HR({ className }: { className: string }) {
  return <hr className={className} />;
}

DropDown.ToggleButton = ToggleButton;
DropDown.List = List;
DropDown.LinkItem = LinkItem;
DropDown.TextItem = TextItem;
DropDown.HR = HR;

export default DropDown;
