import type { FC } from "react";
import type { IButton } from "./Button.types";
import styles from "./Button.module.css";
import { classNames } from "@app/utils/classNames";

export const Button: FC<IButton> = ({ kind, icon, children, ...props }) => {
  return (
    <button className={classNames(styles.container, styles[kind])} {...props}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </button>
  );
};
