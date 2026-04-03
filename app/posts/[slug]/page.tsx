import React from "react";
import { Metadata } from "next";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import PostItemDetails from "@/components/posts/PostItemDetails";
import { getPostData, getAllPostSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: `${post.title} | Post`,
    };
  } catch (e) {
    return {
      title: "Post Not Found",
    };
  }
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.params.slug,
  }));
}

export default async function PostDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const post = await getPostData(slug);

    return (
      <>
        <PageBannerTitle
          title={post.title}
          img="/images/portfolio/portfolio-background.jpg"
        />
        <div className="py-20">
          <div className="container">
            <PostItemDetails post={post} mdxSource={null} />
          </div>
        </div>
      </>
    );
  } catch (e) {
    return notFound();
  }
}
