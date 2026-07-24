import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./AboutMeWidget.module.css";

export const AboutMeWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="About me" description="Story about yourself" />
      <div className={styles.container}>
        <div className={styles.description}>
          I like it building web products from idea to production. While my primary focus is frontend development, I
          also work comfortably across the backend, allowing me to develop complete, end-to-end solutions.
        </div>
        <div className={styles.description}>
          I enjoy solving real problems and creating interfaces that feel intuitive and polished. Clean architecture,
          maintainable code, and continuous learning are values I bring to every project.
        </div>
      </div>
    </WidgetWrapper>
  );
};
