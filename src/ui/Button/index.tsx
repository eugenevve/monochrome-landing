import type { FC } from "react";

import styles from "./Button.module.css";
import type { IButton } from "./Button.types";
import { BaseButton } from "../BaseButton";

export const Button: FC<IButton> = ({ kind, icon, children, ...props }) => {
  return (
    <BaseButton {...props} kind={kind} className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </BaseButton>
  );
};
