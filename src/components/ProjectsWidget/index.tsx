import { ProjectItem } from "@app/components/ProjectItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { PROJECTS } from "@app/data/projects";
import type { FC } from "react";

import styles from "./ProjectsWidget.module.css";
import type { IProjectsWidget } from "./ProjectsWidget.types";

export const ProjectsWidget: FC<IProjectsWidget> = ({ favorite }) => {
  const filtered = favorite ? PROJECTS.filter((item) => item.favorite) : PROJECTS;

  return (
    <WidgetWrapper>
      <TitleDescription title="Projects" description={favorite ? "Pinned projects" : "All projects"} />
      <div className={styles.container}>
        {filtered.map((item, index) => (
          <ProjectItem key={index} item={item} />
        ))}
      </div>
    </WidgetWrapper>
  );
};
