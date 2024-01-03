import Link from "next/link";

export default function Home() {
  const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
  ];
  return (
    <main className="">
      <h1 className="text-2xl text-bold">All Post</h1>
      <ul className="flex gap-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
        <li></li>
      </ul>
    </main>
  );
}
