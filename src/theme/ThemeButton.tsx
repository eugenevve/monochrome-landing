import { useTheme } from "@app/theme/useTheme";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { IconButton } from "@app/ui/IconButton";
import { MoonIcon, SunIcon, DesktopIcon } from "@app/ui/Icons";
import type { FC } from "react";

import { ThemeKind } from "./Theme.types";

const icon = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: <DesktopIcon />,
};

export const ThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    switch (theme) {
      case ThemeKind.SYSTEM:
        setTheme(ThemeKind.DARK);
        break;
      case ThemeKind.DARK:
        setTheme(ThemeKind.LIGHT);
        break;
      case ThemeKind.LIGHT:
        setTheme(ThemeKind.SYSTEM);
        break;
    }
  };

  return (
    <IconButton kind={ButtonKind.PRIMARY} onClick={toggle}>
      {icon[theme]}
    </IconButton>
  );
};
