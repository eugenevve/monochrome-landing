import type { ReactNode } from "react";

import type { ButtonKind } from "../BaseButton/BaseButton.types";

export interface IButton {
  kind: ButtonKind;
  icon?: ReactNode;
  children: ReactNode;
}
