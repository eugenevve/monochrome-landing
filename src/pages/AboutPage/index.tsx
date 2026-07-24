import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

import { AboutMeWidget } from "./components/AboutMeWidget";
import { CareerWidget } from "./components/CareerWidget";
import { SkillsWidget } from "./components/SkillsWidget";

export const AboutPage: FC = () => {
  return (
    <PageWrapper>
      <AboutMeWidget />
      <CareerWidget />
      <SkillsWidget />
    </PageWrapper>
  );
};
