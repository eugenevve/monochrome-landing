import { ThemeButton } from "@app/theme/ThemeButton";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { IconButton } from "@app/ui/IconButton";
import { Line } from "@app/ui/Line";
import { navigationItems } from "@app/utils/navigation";
import { useNavigationKind } from "@app/utils/useNavigationKind";
import type { FC } from "react";
import { useNavigate } from "react-router";

import styles from "./BottomBar.module.css";

export const BottomBar: FC = () => {
  const navigate = useNavigate();
  const getButtonKind = useNavigationKind(ButtonKind);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {navigationItems.map(({ path, icon }) => (
          <IconButton key={path} kind={getButtonKind(path)} onClick={() => void navigate(path)}>
            {icon}
          </IconButton>
        ))}
      </div>
      <div className={styles.section}>
        <Line vertical />
        <ThemeButton />
      </div>
    </div>
  );
};
