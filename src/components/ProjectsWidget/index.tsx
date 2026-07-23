import { ProjectItem } from "@app/components/ProjectItem";
import type { IItem } from "@app/components/ProjectItem/ProjectItem.types";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./ProjectsWidget.module.css";
import type { IProjectsWidget } from "./ProjectsWidget.types";
import data from "../../../public/projects/projects.json";

export const ProjectsWidget: FC<IProjectsWidget> = ({ favorite }) => {
  const items: IItem[] = data;
  const filtered = favorite ? items.filter((item) => item.favorite) : items;

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
