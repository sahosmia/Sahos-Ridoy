import Link from "next/link";
import { posts } from "../../constants";

export default function Home() {
 
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
