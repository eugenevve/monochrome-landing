import { SkillsItem } from "@app/components/SkillsItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { SKILLS } from "@app/data/skills";
import type { FC } from "react";

import styles from "./SkillsWidget.module.css";

export const SkillsWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="Professional Skills" description="Various possibilities" />
      <div className={styles.container}>
        {SKILLS.map(({ title, skills }) => (
          <SkillsItem key={title} title={title} skills={skills} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
