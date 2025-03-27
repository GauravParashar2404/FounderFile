import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="p-10 text-4xl font-bold text-amber-400 md:text-blue-600 lg:text-red-700 xl:text-pink-500">
        <Link href="/draft">Go To Draft</Link>
      </h1>
    </div>
  );
}
