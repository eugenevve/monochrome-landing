import type { FC } from "react";

import styles from "./WidgetWrapper.module.css";
import type { IWidgetWrapper } from "./WidgetWrapper.types";

export const WidgetWrapper: FC<IWidgetWrapper> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
