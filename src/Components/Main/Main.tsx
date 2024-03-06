import Form from "./../Form/Form.tsx";
import Entries from "./../Entries/Entries.tsx";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Form />
      <Entries />
    </main>
  );
}
