import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { ButtonKind } from "../BaseButton/BaseButton.types";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  kind: ButtonKind;
  icon?: ReactNode;
  children: ReactNode;
}
