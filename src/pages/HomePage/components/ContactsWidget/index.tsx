import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { Button } from "@app/ui/Button";
import { FigmaIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "@app/ui/Icons";
import type { FC } from "react";

import styles from "./ContactsWidget.module.css";

export const ContactsWidget: FC = () => {
  const items = [
    {
      link: "https://github.com/",
      icon: <GitHubIcon />,
      label: "GitHub",
    },
    {
      link: "https://www.figma.com/",
      icon: <FigmaIcon />,
      label: "Figma",
    },
    {
      link: "https://www.linkedin.com/",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      link: "https://www.instagram.com/",
      icon: <InstagramIcon />,
      label: "Instagram",
    },
  ];

  return (
    <WidgetWrapper>
      <TitleDescription title="Contacts" description="I am present on social networks, you can follow me" />
      <div className={styles.container}>
        {items.map(({ label, link, icon }) => (
          <Button key={link} kind={ButtonKind.SECONDARY} link={link} icon={icon}>
            {label}
          </Button>
        ))}
      </div>
    </WidgetWrapper>
  );
};
