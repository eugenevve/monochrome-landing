import { ThemeButton } from "@app/theme/ThemeButton";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { Button } from "@app/ui/Button";
import { Line } from "@app/ui/Line";
import { navigationItems } from "@app/utils/navigation";
import { useNavigationKind } from "@app/utils/useNavigationKind";
import type { FC } from "react";
import { useNavigate } from "react-router";

import styles from "./Header.module.css";
import { Logotype } from "../Logotype";

export const Header: FC = () => {
  const navigate = useNavigate();
  const getButtonKind = useNavigationKind(ButtonKind);

  return (
    <div className={styles.container}>
      <Logotype />
      <div className={styles.section}>
        <div className={styles.menu}>
          {navigationItems.map(({ label, path, icon }) => (
            <Button key={path} kind={getButtonKind(path)} onClick={() => void navigate(path)} icon={icon}>
              {label}
            </Button>
          ))}
        </div>
        <Line vertical />
        <ThemeButton />
      </div>
    </div>
  );
};
