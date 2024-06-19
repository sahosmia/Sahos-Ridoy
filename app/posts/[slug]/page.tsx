import React from "react";
import { posts } from "../../../constants";
import { Metadata } from "next";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import PostItemDetails from "@/components/posts/PostItemDetails";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = posts.find((item) => item.slug === slug);
  return {
    title: `${post.title} | Post`,
  };
}

export function generateStaticParams() {
  return posts.map((item) => ({
    slug: item.slug,
  }));
}

export default function PostDetails({ params }) {
  const { slug } = params;
  const post = posts.find((item) => item.slug === slug);

  return (
    <>
      <PageBannerTitle
        title={post.title}
        img="/images/portfolio/portfolio-background.jpg"
      />
      <div className="py-20">
        <div className="container">
          <PostItemDetails post={post} />
        </div>
      </div>
    </>
  );
}
