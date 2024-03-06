import styles from "./Form.module.css";

export default function Form() {
  return (
    <form action="submit">
      <h2>New Entry</h2>
      <label htmlFor="motto"></label>
      <input type="text" id="motto" name="motto" />
      <label htmlFor="notes"></label>
      <input type="textarea" id="notes" name="notes" />
      <input type="submit" value="Create" />
    </form>
  );
}
