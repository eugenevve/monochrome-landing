import type { FC } from "react";

import styles from "./NotFoundPage.module.css";

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>404</div>
      <div className={styles.description}>Not Found Page</div>
    </div>
  );
};
