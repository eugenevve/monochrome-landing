import { PROFILE } from "@app/data/profile";
import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import type { FC } from "react";

import styles from "./PageWrapper.module.css";
import type { IPageWrapper } from "./PageWrapper.types";
import { BottomBar } from "../BottomBar";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const PageWrapper: FC<IPageWrapper> = ({ title, children }) => {
  const isMobile = useIsMobileQuery();

  return (
    <>
      {title && <title>{`${PROFILE.username} - ${title}`}</title>}
      <div className={styles.container}>
        <div className={styles.content}>
          {!isMobile && <Header />}
          <div className={styles.chapter}>{children}</div>
          <Footer />
          {isMobile && <BottomBar />}
        </div>
      </div>
    </>
  );
};
