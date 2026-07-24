import { ProjectItem } from "@app/components/ProjectItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./ProjectsWidget.module.css";
import type { IProjectsWidget } from "./ProjectsWidget.types";

export const ProjectsWidget: FC<IProjectsWidget> = ({ favorite }) => {
  const items = [
    {
      link: "https://github.com/eugenevve/converter-bot",
      image: "image.png",
      resource: "github",
      title: "converter-bot",
      description: "Telegram bot for converting photos to PDF files",
      favorite: true,
    },
    {
      link: "https://github.com/eugenevve/pwa-template",
      image: "image.png",
      resource: "github",
      title: "PWA-Template",
      description: "Open source template with customizable PWA mode",
      favorite: true,
    },
    {
      link: "https://github.com/eugenevve/server-rustdesk",
      image: "image.png",
      resource: "github",
      title: "Server RustDesk",
      description: "Instructions for setting up a server to use RustDesk",
      favorite: false,
    },
    {
      link: "https://github.com/eugenevve/windows-system-optimization",
      image: "image.png",
      resource: "github",
      title: "Windows system optimization",
      description: "Manual optimization of the Windows 10-11 system",
      favorite: false,
    },
    {
      link: "https://www.figma.com/community/file/1632648541726490795/program-backup?q_id=28d4d181-f6fd-438c-85ea-0397f1284065",
      image: "image.png",
      resource: "figma",
      title: "Program-Backup",
      description: "Design concept for a file copying app",
      favorite: true,
    },
    {
      link: "https://www.figma.com/community/file/1305939245480180964/yandex-pharma-day?q_id=28d4d181-f6fd-438c-85ea-0397f1284065",
      image: "image.png",
      resource: "figma",
      title: "Yandex Pharma Day",
      description: "Landing page for Pharmacology Day",
      favorite: true,
    },
    {
      link: "https://www.figma.com/community/file/1154827765025781172/n-logo?q_id=28d4d181-f6fd-438c-85ea-0397f1284065",
      image: "image.png",
      resource: "figma",
      title: "N Logo",
      description: "Logo for the site Network Profile",
      favorite: false,
    },
    {
      link: "https://www.figma.com/community/file/1113393200185818580/music-service?q_id=28d4d181-f6fd-438c-85ea-0397f1284065",
      image: "image.png",
      resource: "figma",
      title: "Music service",
      description: "Minimalistic music service",
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
