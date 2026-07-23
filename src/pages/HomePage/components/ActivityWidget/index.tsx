import { CategoryElement } from "@app/components/CategoryElement";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { BrushIcon, CodeIcon, MobileIcon, WebIcon } from "@app/ui/Icons";
import type { FC } from "react";

import styles from "./ActivityWidget.module.css";

export const ActivityWidget: FC = () => {
  const items = [
    {
      icon: <WebIcon />,
      title: "Website",
      description: "Landing | Website",
    },
    {
      icon: <MobileIcon />,
      title: "Mobile App",
      description: "iOS | Android",
    },
    {
      icon: <BrushIcon />,
      title: "Design",
      description: "Landing | Website",
    },
    {
      icon: <CodeIcon />,
      title: "Testing",
      description: "In the direction",
    },
  ];

  return (
    <WidgetWrapper>
      <TitleDescription title="Activity" description="Areas of activity in which I work" />
      <div className={styles.container}>
        {items.map(({ icon, title, description }) => (
          <CategoryElement key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
