import { getPosts } from "../api/api";
import CurrentPage from "./_components/posts/currentPage/CurrentPage";
import Pagination from "./_components/posts/pagination/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const posts = await getPosts();

  return (
    <>
      <h1>All posts</h1>
      <Pagination posts={posts} page={page} />
      <CurrentPage posts={posts} page={page} />
    </>
  );
}
