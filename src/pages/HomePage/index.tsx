import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

import { AboutWidget } from "./components/AboutWidget";
import { ActivityWidget } from "./components/ActivityWidget";

export const HomePage: FC = () => {
  return (
    <PageWrapper>
      <AboutWidget />
      <ActivityWidget />
    </PageWrapper>
  );
};
