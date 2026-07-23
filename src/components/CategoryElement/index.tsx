import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { IconButton } from "@app/ui/IconButton";
import type { FC } from "react";

import styles from "./CategoryElement.module.css";
import type { ICategoryElement } from "./CategoryElement.types";

export const CategoryElement: FC<ICategoryElement> = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <IconButton kind={ButtonKind.PRIMARY} disabled>
        {icon}
      </IconButton>
      <div className={styles.section}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
