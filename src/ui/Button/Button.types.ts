import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { ButtonKind } from "../BaseButton/BaseButton.types";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  icon?: ReactNode;
  children: ReactNode;
}
