import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

import { AboutWidget } from "./components/AboutWidget";
import { ActivityWidget } from "./components/ActivityWidget";
import { ProjectsWidget } from "../../components/ProjectsWidget";

export const HomePage: FC = () => {
  return (
    <PageWrapper>
      <AboutWidget />
      <ActivityWidget />
      <ProjectsWidget favorite />
    </PageWrapper>
  );
};
