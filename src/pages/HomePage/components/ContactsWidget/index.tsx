import { TitleDescription } from "@app/components/TitleDescription";
import { WidgetWrapper } from "@app/components/WidgetWrapper";
import { CONTACTS } from "@app/data/contacts";
import { ButtonKind } from "@app/ui/BaseButton/BaseButton.types";
import { Button } from "@app/ui/Button";
import type { FC } from "react";

import styles from "./ContactsWidget.module.css";

export const ContactsWidget: FC = () => {
  return (
    <WidgetWrapper>
      <TitleDescription title="Contacts" description="I am present on social networks, you can follow me" />
      <div className={styles.container}>
        {CONTACTS.map(({ label, link, icon }) => (
          <Button key={link} kind={ButtonKind.SECONDARY} link={link} icon={icon}>
            {label}
          </Button>
        ))}
      </div>
    </WidgetWrapper>
  );
};
