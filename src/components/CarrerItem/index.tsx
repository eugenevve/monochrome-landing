import { Badge } from "@app/ui/Badge";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { IconButton } from "@app/ui/IconButton";
import type { FC } from "react";

import styles from "./CarrerItem.module.css";
import type { ICarrerItem } from "./CarrerItem.types";

export const CarrerItem: FC<ICarrerItem> = ({ icon, badge, title, description }) => {
  return (
    <div className={styles.container}>
      <IconButton kind={ButtonKind.SECONDARY} disabled>
        {icon}
      </IconButton>
      <div className={styles.section}>
        <div className={styles.titleContainer}>
          <Badge title={badge} />
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
