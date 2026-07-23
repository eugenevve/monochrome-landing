import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { Button } from "@app/ui/Button";
import { CodeIcon } from "@app/ui/Icons";
import type { FC } from "react";
import { useNavigate } from "react-router";

import styles from "./AboutWidget.module.css";

export const AboutWidget: FC = () => {
  const navigate = useNavigate();

  return (
    <WidgetWrapper>
      <div className={styles.container}>
        <TitleDescription title="Eugene (@eugenevve)" description="Full-Stack Developer • Frontend-focused" />
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          Developing and releasing mockups and templates for developers, freely and openly accessible
        </div>
      </div>
      <Button kind={ButtonKind.SECONDARY} icon={<CodeIcon />} onClick={() => void navigate("/projects")}>
        View Projects
      </Button>
    </WidgetWrapper>
  );
};
