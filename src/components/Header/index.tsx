import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { CodeIcon, HouseIcon, UserIcon } from "@app/ui/Icons";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router";

import styles from "./Header.module.css";
import { Logotype } from "../Logotype";

export const Header: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getButtonKind = (path: string) => (pathname === path ? ButtonKind.PRIMARY : ButtonKind.SECONDARY);

  const items = [
    { label: "Home", path: "/", icon: <HouseIcon /> },
    { label: "Projects", path: "/projects", icon: <CodeIcon /> },
    { label: "About", path: "/about", icon: <UserIcon /> },
  ];

  return (
    <div className={styles.container}>
      <Logotype />
      <div className={styles.menu}>
        {items.map(({ label, path, icon }) => (
          <Button key={path} kind={getButtonKind(path)} onClick={() => void navigate(path)} icon={icon}>
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
