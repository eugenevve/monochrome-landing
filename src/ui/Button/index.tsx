import { classNames } from "@app/utils/classNames";
import type { FC } from "react";

import styles from "./Button.module.css";
import type { IButton } from "./Button.types";

export const Button: FC<IButton> = ({ kind, icon, children, ...props }) => {
  return (
    <button {...props} className={classNames(styles.container, styles[kind])}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </button>
  );
};
