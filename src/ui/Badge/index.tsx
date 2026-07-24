import type { FC } from "react";

import styles from "./Badge.module.css";
import type { IBadge } from "./Badge.types";

export const Badge: FC<IBadge> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};
