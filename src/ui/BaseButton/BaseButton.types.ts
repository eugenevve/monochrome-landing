import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IBaseButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  kind: ButtonKind;
  children: ReactNode;
  className?: string;
}

export enum ButtonKind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
