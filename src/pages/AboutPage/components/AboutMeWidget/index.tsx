import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import type { FC } from "react";

import styles from "./AboutMeWidget.module.css";

export const AboutMeWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="About me" description="Story about yourself" />
      <div className={styles.container}>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride
          Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's
          Body Type sheets.
        </div>
        <div>
          It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like
          Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </div>
      </div>
    </WidgetWrapper>
  );
};
