import { LinkProps } from "next/link";
import { PropsWithChildren, ReactNode } from "react";

export interface DropDownProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
export interface DropDownLinkProps extends PropsWithChildren<LinkProps> {
  className?: string;
}
