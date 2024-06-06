import { posts } from "@/constants";
import React from "react";

export function generateStaticParams() {
  return posts.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function PostDetails({ params }) {
  const {id} = params;
   const post = posts.find((item) => item.id === parseInt(id));
   
  return <div>Post id : {post.title}</div>;
}
