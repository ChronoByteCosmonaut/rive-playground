import RiveComponent from "@/components/RiveComponent";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <RiveComponent />
      </main>
    </div>
  );
}
