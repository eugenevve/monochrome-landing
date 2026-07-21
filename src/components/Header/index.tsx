import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
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
      <div className={styles.menu}>
        {navigationItems.map(({ label, path, icon }) => (
          <Button key={path} kind={getButtonKind(path)} onClick={() => void navigate(path)} icon={icon}>
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
