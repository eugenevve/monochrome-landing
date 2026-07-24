import { SkillsItem } from "@app/components/SkillsItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./SkillsWidget.module.css";

export const SkillsWidget: FC = () => {
  const items = [
    {
      title: "SkillName-1",
      skills: ["Skill-1", "Skill-2"],
    },
    {
      title: "SkillName-2",
      skills: ["Skill-1", "Skill-2"],
    },
    {
      title: "SkillName-3",
      skills: ["Skill-1", "Skill-2"],
    },
  ];

  return (
    <WidgetWrapper>
      <TitleDescription title="Professional Skills" description="Various possibilities" />
      <div className={styles.container}>
        {items.map(({ title, skills }) => (
          <SkillsItem key={title} title={title} skills={skills} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
