import styles from "./Form.module.css";

export default function Form() {
  return (
    <form action="submit" className={styles.form}>
      <h2 className={styles.form__headline}>New Entry</h2>
      <label htmlFor="motto">Motto</label>
      <input type="text" id="motto" name="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea id="notes" name="notes" rows="4" />
      <input className={styles.form__button} type="submit" value="Create" />
    </form>
  );
}
