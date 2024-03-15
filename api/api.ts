export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts = await res.json();

  return posts;
}

export async function getSinglePost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const post = await res.json();

  return post;
}
