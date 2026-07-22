import { classNames } from "@app/utils/classNames";
import type { FC } from "react";

import styles from "./BaseButton.module.css";
import type { IBaseButton } from "./BaseButton.types";

export const BaseButton: FC<IBaseButton> = ({ kind, children, className, ...props }) => {
  return (
    <button {...props} className={classNames(styles.container, styles[kind], className || "")}>
      {children}
    </button>
  );
};
