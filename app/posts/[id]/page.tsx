import styles from "./page.module.css";
import { getPosts, getSinglePost } from "@/api/api";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function SinglePost({
  params,
}: {
  params: { id: string };
}) {
  const post = await getSinglePost(params.id);
  return (
    <>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.text}>{post.body}</div>
    </>
  );
}
