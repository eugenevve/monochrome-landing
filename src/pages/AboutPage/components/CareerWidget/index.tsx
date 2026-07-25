import { CarrerItem } from "@app/components/CarrerItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { AwordIcon, SchoolIcon, SuitcaseIcon, UniversityIcon } from "@app/ui/Icons";
import type { FC } from "react";

import styles from "./CareerWidget.module.css";

export const CareerWidget: FC = () => {
  const items = [
    {
      icon: <SuitcaseIcon />,
      badge: "January 2026",
      title: "Work-Name | Company",
      description: "Description",
    },
    {
      icon: <UniversityIcon />,
      badge: "January 2026",
      title: "Work-Name | Company",
      description: "Description",
    },
    {
      icon: <AwordIcon />,
      badge: "January 2026",
      title: "Work-Name | Company",
      description: "Description",
    },
    {
      icon: <SchoolIcon />,
      badge: "January 2026",
      title: "Work-Name | Company",
      description: "Description",
    },
  ];

  return (
    <WidgetWrapper>
      <TitleDescription title="Career Milestones" description="Stages of development" />
      <div className={styles.container}>
        {items.map(({ icon, badge, title, description }) => (
          <CarrerItem key={title} icon={icon} badge={badge} title={title} description={description} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
