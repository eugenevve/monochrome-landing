import { FigmaIcon, GitHubIcon } from "@app/ui/Icons";
import type { FC } from "react";

import styles from "./ProjectItem.module.css";
import type { IProjectItem } from "./ProjectItem.types";

export const ProjectItem: FC<IProjectItem> = ({ item }) => {
  const items = {
    github: GitHubIcon,
    figma: FigmaIcon,
  };

  const Icon = items[item.resource as keyof typeof items];

  return (
    <a href={item.link} className={styles.container}>
      <img src={`/projects/${item.image}`} alt={item.title} className={styles.image} draggable={false} />
      <div className={styles.section}>
        <div className={styles.titleContainer}>
          <div className={styles.resources}>
            <Icon />
          </div>
          <div className={styles.title}>{item.title}</div>
        </div>
        <div className={styles.description}>{item.description}</div>
      </div>
    </a>
  );
};
