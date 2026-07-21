import { Logo } from "@app/ui/Icons";
import type { FC } from "react";
import { Link } from "react-router";

import styles from "./Logotype.module.css";

export const Logotype: FC = () => {
  return (
    <Link to="/" replace className={styles.container}>
      <Logo className={styles.icon} />
    </Link>
  );
};
