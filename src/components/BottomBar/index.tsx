import { IconButton } from "@app/ui/IconButton";
import { IconButtonKind } from "@app/ui/IconButton/IconButton.types";
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
      {navigationItems.map(({ path, icon }) => (
        <IconButton key={path} kind={getButtonKind(path)} onClick={() => void navigate(path)}>
          {icon}
        </IconButton>
      ))}
    </div>
  );
};
