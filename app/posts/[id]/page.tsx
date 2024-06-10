import React from "react";
import { posts } from "../../../constants";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const post = posts.find((item) => item.id === parseInt(id));
  return {
    title: `${post.title} | Post`,
  };
}

export function generateStaticParams() {
  return posts.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function PostDetails({ params }) {
  const { id } = params;
  const post = posts.find((item) => item.id === parseInt(id));

  return <div>Post id : {post.title}</div>;
}
