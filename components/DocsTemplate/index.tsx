// /components/DocsTemplate/index.tsx
import { useMDXComponent } from "next-contentlayer/hooks";
import { type Docs } from "contentlayer/generated";
import Markup from "../Markup";
import styles from "./styles.module.scss";

type Props = {
  doc: Docs;
};

export default function DocsTemplate({ doc: { title, body } }: Props) {
  const MDXContent = useMDXComponent(body.code);
  return (
    <div className={styles.container}>
      <div />
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>
        <Markup>
          <MDXContent />
        </Markup>
      </article>
    </div>
  );
}
