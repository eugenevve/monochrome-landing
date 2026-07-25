import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { ABOUT_DESCRIPTION } from "@app/data/profile";
import type { FC } from "react";

import styles from "./AboutMeWidget.module.css";

export const AboutMeWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="About me" description="Story about yourself" />
      <div className={styles.container}>
        <div>{ABOUT_DESCRIPTION.description_1}</div>
        <div>{ABOUT_DESCRIPTION.description_2}</div>
      </div>
    </WidgetWrapper>
  );
};
