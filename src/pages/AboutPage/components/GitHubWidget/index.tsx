import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { GITHUB_LINKS, GITHUB_USERNAME } from "@app/data/github";
import { ThemeKind } from "@app/theme/Theme.types";
import { useTheme } from "@app/theme/useTheme";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { Button } from "@app/ui/Button";
import type { FC } from "react";
import { GitHubCalendar } from "react-github-calendar";

import styles from "./GitHubWidget.module.css";

export const GitHubWidget: FC = () => {
  const { resolvedTheme } = useTheme();

  const theme = {
    light: ["var(--white)", "#cacaca", "#868686", "#2e2e2e", "var(--black)"],
    dark: ["var(--black)", "#2e2e2e", "#4a4a4d", "#7a7a7d", "var(--white)"],
  };

  return (
    <WidgetWrapper>
      <TitleDescription title="Github contributions" description="All contributions" />
      <div className={styles.container}>
        <div className={styles.section}>
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockMargin={3.5}
            blockRadius={4}
            fontSize={12}
            theme={theme}
            colorScheme={resolvedTheme === ThemeKind.DARK ? "dark" : "light"}
            showWeekdayLabels
            labels={{
              totalCount: "{{count}} contributions",
            }}
          />
        </div>
        <div className={styles.buttons}>
          {GITHUB_LINKS.map(({ link, label, icon }) => (
            <Button key={link} kind={ButtonKind.SECONDARY} link={link} icon={icon}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
};
