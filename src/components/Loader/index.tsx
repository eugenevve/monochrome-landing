import { Logo } from "@app/ui/Icons";
import { useEffect, useState, type FC } from "react";

import styles from "./Loader.module.css";

export const Loader: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={`${styles.container} ${loading ? "" : styles.hidden}`}>
      <Logo className={styles.icon} />
    </div>
  );
};
