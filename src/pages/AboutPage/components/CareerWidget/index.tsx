import { CarrerItem } from "@app/components/CarrerItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { CAREERS } from "@app/data/careers";
import type { FC } from "react";

import styles from "./CareerWidget.module.css";

export const CareerWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="Career Milestones" description="Stages of development" />
      <div className={styles.container}>
        {CAREERS.map(({ icon, badge, title, description }) => (
          <CarrerItem key={title} icon={icon} badge={badge} title={title} description={description} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
