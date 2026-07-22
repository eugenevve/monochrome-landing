import { classNames } from "@app/utils/classNames";
import type { FC } from "react";

import styles from "./Line.module.css";
import type { ILine } from "./Line.types";

export const Line: FC<ILine> = ({ vertical }) => {
  return <div className={classNames(styles.line, vertical ? styles.vertical : styles.horizontal)} />;
};
