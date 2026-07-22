import { ThemeButton } from "@app/theme/ThemeButton";
import { IconButton } from "@app/ui/IconButton";
import { IconButtonKind } from "@app/ui/IconButton/IconButton.types";
import { Line } from "@app/ui/Line";
import { navigationItems } from "@app/utils/navigation";
import { useNavigationKind } from "@app/utils/useNavigationKind";
import type { FC } from "react";
import { useNavigate } from "react-router";

import styles from "./BottomBar.module.css";

export const BottomBar: FC = () => {
  const navigate = useNavigate();
  const getButtonKind = useNavigationKind(IconButtonKind);

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
