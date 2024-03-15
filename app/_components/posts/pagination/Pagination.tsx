import Link from "next/link";
import styles from "./Pagination.module.css";
import { redirect } from "next/navigation";

interface PaginationProps {
  posts: Post[];
  page: number;
}

const Pagination = ({ posts, page }: PaginationProps) => {
  const lastPage = Math.ceil(posts.length / 10);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < lastPage;

  if (page > lastPage) {
    redirect(`/?page=${lastPage}`);
  }

  if (page < 1) {
    redirect(`/?page=1`);
  }
  const paginationNumbers = [];

  for (let i = 1; i <= lastPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <Link
        href={`/?page=${page - 1}`}
        className={hasPreviousPage ? styles.link : styles.disabled}
        aria-disabled={!hasPreviousPage}
        tabIndex={!hasPreviousPage ? -1 : undefined}
      >
        Previous
      </Link>
      <div className={styles.numbers}>
        {paginationNumbers.map((number) => (
          <Link
            href={`/?page=${number}`}
            key={number}
            className={page === number ? styles.active : ""}
          >
            <span>{number}</span>
          </Link>
        ))}
      </div>
      <Link
        href={`/?page=${page + 1}`}
        className={hasNextPage ? styles.link : styles.disabled}
        aria-disabled={!hasNextPage}
        tabIndex={!hasNextPage ? -1 : undefined}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
