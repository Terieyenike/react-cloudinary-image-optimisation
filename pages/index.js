import Marathoner from "../component/Marathoner";
import Athlete from "../component/Athlete";

import styles from "../styles/Home.module.css";

export default function IndexPage() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.align}>Hosted Images</h1>
        <div className={styles.container}>
          <Marathoner />
          <Athlete />
        </div>
      </main>
    </div>
  );
}
