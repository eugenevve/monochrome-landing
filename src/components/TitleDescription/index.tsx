import type { FC } from "react";

import styles from "./TitleDescription.module.css";
import type { ITitleDescription } from "./TitleDescription.types";

export const TitleDescription: FC<ITitleDescription> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
