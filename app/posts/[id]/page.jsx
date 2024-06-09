import React from "react";
import { posts } from "../../../constants";

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
