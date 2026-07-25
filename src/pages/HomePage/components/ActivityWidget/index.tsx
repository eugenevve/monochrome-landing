import { CategoryItem } from "@app/components/CategoryItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { ACTIVITY } from "@app/data/activity";
import type { FC } from "react";

import styles from "./ActivityWidget.module.css";

export const ActivityWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="Activity" description="Areas of activity in which I work" />
      <div className={styles.container}>
        {ACTIVITY.map(({ icon, title, description }) => (
          <CategoryItem key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
