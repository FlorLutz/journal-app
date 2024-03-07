import styles from "./Entry.module.css";
import star from "./../../assets/star.svg";
import starFilled from "./../../assets/star-filled.svg";
import { useState } from "react";

type props = {
  date: string;
  headline: string;
  content: string;
};

export default function Entries({ date, headline, content }: props) {
  const [isMarked, setIsMarked] = useState(false);

  function handleClick() {
    setIsMarked(!isMarked);
  }
  return (
    <>
      <p className={styles.entry__date}>{date}</p>
      <div className={styles.entry__headlineContainer}>
        <h2 className={styles.entry__headline}>{headline}</h2>
        <img src={isMarked ? starFilled : star} onClick={handleClick} />
      </div>
      <p className={styles.entry__content}>{content}</p>
    </>
  );
}
