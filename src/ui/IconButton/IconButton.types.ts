import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { ButtonKind } from "../BaseButton/BaseButton.types";

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  children: ReactNode;
}
