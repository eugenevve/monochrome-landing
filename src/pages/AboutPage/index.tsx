import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

import { AboutMeWidget } from "./components/AboutMeWidget";

export const AboutPage: FC = () => {
  return (
    <PageWrapper>
      <AboutMeWidget />
    </PageWrapper>
  );
};
