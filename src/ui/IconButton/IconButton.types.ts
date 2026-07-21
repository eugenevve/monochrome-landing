import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: IconButtonKind;
  children: ReactNode;
}

export enum IconButtonKind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
