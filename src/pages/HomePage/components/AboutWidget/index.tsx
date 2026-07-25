import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { HOME_DESCRIPTION, PROFILE } from "@app/data/profile";
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
      <TitleDescription title={`Name (@${PROFILE.username})`} description={HOME_DESCRIPTION.description} />
      <div className={styles.container}>
        <div className={styles.description}>
          {HOME_DESCRIPTION.about}
        </div>
      </div>
      <Button kind={ButtonKind.SECONDARY} icon={<CodeIcon />} onClick={() => void navigate("/projects")}>
        View Projects
      </Button>
    </WidgetWrapper>
  );
};
