import { PageWrapper } from "@app/components/PageWrapper";
import { ProjectsWidget } from "@app/components/ProjectsWidget";
import type { FC } from "react";

import { AboutWidget } from "./components/AboutWidget";
import { ActivityWidget } from "./components/ActivityWidget";
import { ContactsWidget } from "./components/ContactsWidget";

export const HomePage: FC = () => {
  return (
    <PageWrapper title="home">
      <AboutWidget />
      <ActivityWidget />
      <ProjectsWidget favorite />
      <ContactsWidget />
    </PageWrapper>
  );
};
