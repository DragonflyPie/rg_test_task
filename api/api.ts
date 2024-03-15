const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts = await res.json();

  return posts;
}

export async function getSinglePost(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const post = await res.json();

  return post;
}
