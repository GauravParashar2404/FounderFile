import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-gray-600 xl:text-pink-400">
        <Link href="/draft">Go To Draft</Link>
      </h1>
    </div>
  );
}
