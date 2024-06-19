import { posts } from "../../constants";
import { Metadata } from "next";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import PostItem from "@/components/posts/PostItem";



export const metadata: Metadata = {
  title: "Posts Page",
  description: "Sahos mia is a profetional web developer",
};


export default function Home() {
  return (
    <>
      <PageBannerTitle
        title="All Posts"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <div className="pb-10">
        <div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
              {posts.map((item) => (
                <PostItem key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
