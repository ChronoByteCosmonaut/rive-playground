import RiveTest from "@/components/RiveTest";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <RiveTest />
      </main>
    </div>
  );
}
