import type { FC } from "react";

import styles from "./IconButton.module.css";
import type { IIconButton } from "./IconButton.types";
import { BaseButton } from "../BaseButton";

export const IconButton: FC<IIconButton> = ({ kind, children, ...props }) => {
  return (
    <BaseButton {...props} kind={kind} className={styles.container}>
      <div className={styles.content}>{children}</div>
    </BaseButton>
  );
};
