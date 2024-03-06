import styles from "./Entries.module.css";
import Entry from "./../Entry/Entry.tsx";
import EntryNav from "./../Entry__Nav/Entry__Nav.tsx";

export default function Entries() {
  return (
    <>
      <EntryNav />
      <Entry
        date="FEB 25, 2028"
        headline="That's life in the city"
        content="This is my first entry. I so love it here."
        marked={true}
      />
      <Entry
        date="FEB 26, 2028"
        headline="That's still life in the city"
        content="This is my second entry. I don't like it here that much."
        marked={false}
      />
      <Entry
        date="FEB 27, 2028"
        headline="That's event now life in the city"
        content="This is my third entry. This city smells funny."
        marked={false}
      />
    </>
  );
}
