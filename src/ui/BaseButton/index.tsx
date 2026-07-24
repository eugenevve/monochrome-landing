import { classNames } from "@app/utils/classNames";
import type { FC } from "react";

import styles from "./BaseButton.module.css";
import type { IBaseButton } from "./BaseButton.types";

export const BaseButton: FC<IBaseButton> = ({ link, kind, children, className, ...props }) => {
  const style = classNames(styles.container, styles[kind], className || "");

  return link ? (
    <a href={link} className={style}>
      {children}
    </a>
  ) : (
    <button {...props} className={style}>
      {children}
    </button>
  );
};
