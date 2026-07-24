import { Line } from "@app/ui/Line";
import type { FC } from "react";

import styles from "./SkillsItem.module.css";
import type { ISkillsItem } from "./SkillsItem.types";

export const SkillsItem: FC<ISkillsItem> = ({ title, skills }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <Line />
      <div className={styles.section}>
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};
