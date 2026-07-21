import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import type { FC } from "react";

import styles from "./PageWrapper.module.css";
import type { IPageWrapper } from "./PageWrapper.types";
import { BottomBar } from "../BottomBar";
import { Header } from "../Header";

export const PageWrapper: FC<IPageWrapper> = ({ children }) => {
  const isMobile = useIsMobileQuery();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {!isMobile && <Header />}
        <div className={styles.chapter}>{children}</div>
        {isMobile && <BottomBar />}
      </div>
    </div>
  );
};
