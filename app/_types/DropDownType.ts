import { LinkProps } from "next/link";
import { PropsWithChildren, ReactNode, RefObject } from "react";

export interface DropDownProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  itemRef?: RefObject<HTMLDivElement>;
}
export interface DropDownLinkProps extends PropsWithChildren<LinkProps> {
  className?: string;
}
