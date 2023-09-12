/// components/Markup/index.tsx
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children?: React.ReactNode;
};

export default function Markup({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
