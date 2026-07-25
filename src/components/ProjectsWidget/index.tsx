import { ProjectItem } from "@app/components/ProjectItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./ProjectsWidget.module.css";
import type { IProjectsWidget } from "./ProjectsWidget.types";

export const ProjectsWidget: FC<IProjectsWidget> = ({ favorite }) => {
  const items = [
    {
      link: "https://github.com/",
      image: "image.png",
      resource: "github",
      title: "Project name",
      description: "Description",
      favorite: true,
    },
    {
      link: "https://github.com/",
      image: "image.png",
      resource: "github",
      title: "Project name",
      description: "Description",
      favorite: true,
    },
    {
      link: "https://github.com/",
      image: "image.png",
      resource: "github",
      title: "Project name",
      description: "Description",
      favorite: false,
    },
    {
      link: "https://github.com/",
      image: "image.png",
      resource: "github",
      title: "Project name",
      description: "Description",
      favorite: false,
    },
    {
      link: "https://www.figma.com/",
      image: "image.png",
      resource: "figma",
      title: "Project name",
      description: "Description",
      favorite: true,
    },
    {
      link: "https://www.figma.com/",
      image: "image.png",
      resource: "figma",
      title: "Project name",
      description: "Description",
      favorite: true,
    },
    {
      link: "https://www.figma.com/",
      image: "image.png",
      resource: "figma",
      title: "Project name",
      description: "Description",
      favorite: false,
    },
    {
      link: "https://www.figma.com/",
      image: "image.png",
      resource: "figma",
      title: "Project name",
      description: "Description",
      favorite: false,
    },
  ];

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
