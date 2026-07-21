import { classNames } from "@app/utils/classNames";
import type { FC } from "react";

import styles from "./IconButton.module.css";
import type { IIconButton } from "./IconButton.types";

export const IconButton: FC<IIconButton> = ({ kind, children, ...props }) => {
  return (
    <button className={classNames(styles.container, styles[kind])} {...props}>
      <div className={styles.content}>{children}</div>
    </button>
  );
};
