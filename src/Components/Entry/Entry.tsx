import styles from "./Entry.module.css";
import star from "./../../assets/star.svg";
import starFilled from "./../../assets/star-filled.svg";

export default function Entries({ date, headline, content, marked }) {
  return (
    <>
      <p className={styles.entry__date}>{date}</p>
      <h2 className={styles.entry__headline}>{headline}</h2>
      <img src={marked ? starFilled : star} />
      <p className={styles.entry__content}>{content}</p>
    </>
  );
}
