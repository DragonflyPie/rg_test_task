import Link from "next/link";
import styles from "./Card.module.css";

const Card = ({ id, body, title }: Post) => {
  return (
    <Link href={`/posts/${id}`}>
      <article className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{body}</p>
      </article>
    </Link>
  );
};

export default Card;
