import { SkillsItem } from "@app/components/SkillsItem";
import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./SkillsWidget.module.css";

export const SkillsWidget: FC = () => {
  const items = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend",
      skills: ["React", "React Native", "Next.js", "Vite", "Electron"],
    },
    {
      title: "Backend",
      skills: ["FastAPI", "PostgreSQL", "SQLite", "File System", "JWT Authentication"],
    },
    {
      title: "Tools",
      skills: ["Git & GitHub & GitLab", "Figma", "VS Code", "Termius", "NPM"],
    },
    {
      title: "Practices",
      skills: [
        "Responsive Design",
        "Component-driven Development",
        "Clean Architecture",
        "Design & Prototyping",
        "CI/CD",
      ],
    },
    {
      title: "DevOps",
      skills: ["Docker", "Nginx", "GitHub Actions", "Linux", "Bash Scripting"],
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
