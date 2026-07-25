import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

import { AboutMeWidget } from "./components/AboutMeWidget";
import { CareerWidget } from "./components/CareerWidget";
import { GitHubWidget } from "./components/GitHubWidget";
import { SkillsWidget } from "./components/SkillsWidget";

export const AboutPage: FC = () => {
  return (
    <PageWrapper title="about">
      <AboutMeWidget />
      <CareerWidget />
      <SkillsWidget />
      <GitHubWidget />
    </PageWrapper>
  );
};
