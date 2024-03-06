import styles from "./Entry__Nav.module.css";

export default function EntryNav() {
  return (
    <div className={styles.nav__container}>
      <div className={styles["category--selected"]}>
        <span className={styles.category}>All Entries</span>
        <span className={styles.count}>3</span>
      </div>
      <div>
        <span className={styles.category}>Favorites</span>
        <span className={styles.count}>1</span>
      </div>
    </div>
  );
}
