import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

import { AboutWidget } from "./components/AboutWidget";

export const HomePage: FC = () => {
  return (
    <PageWrapper>
      <AboutWidget />
    </PageWrapper>
  );
};
