import { LinkProps } from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

export interface DropDownProps {
  children: ReactNode;
  onClick?: () => void;
  className: string;
}
export interface DropDownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DropDownLinkProps extends PropsWithChildren<LinkProps> {
  className: string;
}
