import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { ButtonKind } from "../BaseButton/BaseButton.types";

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  kind: ButtonKind;
  children: ReactNode;
}
