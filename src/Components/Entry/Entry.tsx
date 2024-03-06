import styles from "./Entry.module.css";
import star from "./../../assets/star.svg";
import starFilled from "./../../assets/star-filled.svg";

type props = {date: string, headline: string, content: string, marked: boolean}

export default function Entries({ date, headline, content, marked }: props){
    <>
      <p className={styles.entry__date}>{date}</p>
      <div className={styles.entry__headlineContainer}>
        <h2 className={styles.entry__headline}>{headline}</h2>
        <img src={marked ? starFilled : star} />
      </div>
      <p className={styles.entry__content}>{content}</p>
    </>
  );
}
