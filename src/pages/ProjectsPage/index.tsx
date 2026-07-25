import { PageWrapper } from "@app/components/PageWrapper";
import { ProjectsWidget } from "@app/components/ProjectsWidget";
import type { FC } from "react";

export const ProjectsPage: FC = () => {
  return (
    <PageWrapper title="projects">
      <ProjectsWidget />
    </PageWrapper>
  );
};
