import styles from "./CurrentPage.module.css";
import Card from "../card/Card";

const LIMIT = 10;

interface CurrentPageProps {
  posts: Post[];
  page: number;
}

const CurrentPage = ({ posts, page }: CurrentPageProps) => {
  const startIndex = (page - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;

  const pagePosts = posts.slice(startIndex, endIndex);

  return (
    <div className={styles.grid}>
      {pagePosts.map((post) => {
        return <Card key={post.id} {...post} />;
      })}
    </div>
  );
};

export default CurrentPage;
