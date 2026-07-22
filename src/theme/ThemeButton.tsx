import { ThemeKind } from "@app/theme/theme";
import { useTheme } from "@app/theme/useTheme";
import { IconButton } from "@app/ui/IconButton";
import { IconButtonKind } from "@app/ui/IconButton/IconButton.types";
import { MoonIcon, SunIcon, DesktopIcon } from "@app/ui/Icons";
import type { FC } from "react";

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
    <IconButton kind={IconButtonKind.PRIMARY} onClick={toggle}>
      {icon[theme]}
    </IconButton>
  );
};
