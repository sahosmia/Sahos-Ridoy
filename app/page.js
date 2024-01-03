import Link from "next/link";

export default function Home() {
  const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
  ];
  return (
    <main className="">
      <h1 className="text-2xl text-bold">Home Page</h1>
    </main>
  );
}
