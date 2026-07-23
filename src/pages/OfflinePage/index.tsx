import type { FC } from "react";

import styles from "./OfflinePage.module.css";

export const OfflinePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Offline</div>
      <div className={styles.description}>Check your internet connection</div>
    </div>
  );
};
