import { PROFILE } from "@app/data/profile";
import type { FC } from "react";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return <div className={styles.container}>© 2026 {PROFILE.username}. All rights reserved</div>;
};
