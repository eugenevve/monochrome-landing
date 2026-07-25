import { CategoryItem } from "@app/components/CategoryItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { BrushIcon, CodeIcon, MobileIcon, WebIcon } from "@app/ui/Icons";
import type { FC } from "react";

import styles from "./ActivityWidget.module.css";

export const ActivityWidget: FC = () => {
  const items = [
    {
      icon: <WebIcon />,
      title: "Activity",
      description: "Description",
    },
    {
      icon: <MobileIcon />,
      title: "Activity",
      description: "Description",
    },
    {
      icon: <BrushIcon />,
      title: "Activity",
      description: "Description",
    },
    {
      icon: <CodeIcon />,
      title: "Activity",
      description: "Description",
    },
  ];

  return (
    <WidgetWrapper>
      <TitleDescription title="Activity" description="Areas of activity in which I work" />
      <div className={styles.container}>
        {items.map(({ icon, title, description }) => (
          <CategoryItem key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
