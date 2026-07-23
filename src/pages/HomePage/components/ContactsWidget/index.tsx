import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { Button } from "@app/ui/Button";
import { FigmaIcon, GitHubIcon, LinkedInIcon } from "@app/ui/Icons";
import type { FC } from "react";

import styles from "./ContactsWidget.module.css";

export const ContactsWidget: FC = () => {
  const items = [
    {
      path: "https://github.com/eugenevve",
      label: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      path: "https://www.figma.com/@eugenevve",
      label: "Figma",
      icon: <FigmaIcon />,
    },
    {
      path: "https://www.linkedin.com/in/eugenevve",
      label: "LinkedIn",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <WidgetWrapper>
      <TitleDescription title="Contacts" description="I am present on social networks, you can follow me" />
      <div className={styles.container}>
        {items.map(({ label, path, icon }) => (
          <Button key={path} kind={ButtonKind.SECONDARY} onClick={() => window.open(path)} icon={icon}>
            {label}
          </Button>
        ))}
      </div>
    </WidgetWrapper>
  );
};
