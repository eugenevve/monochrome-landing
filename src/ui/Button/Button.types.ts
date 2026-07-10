import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  icon?: ReactNode;
  children: ReactNode;
}

export enum ButtonKind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
