import type { ReactNode } from "react";

import type { ButtonKind } from "../BaseButton/BaseButton.types";

export interface IIconButton {
  kind: ButtonKind;
  children: ReactNode;
}
