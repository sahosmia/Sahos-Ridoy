import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

const PostItemDetails = ({ post, mdxSource }: { post: any; mdxSource: any }) => {
  return (
    <div className="w-full md:w-8/12 mx-auto">
      <div className="w-full mb-2 md:mb-5 text-center relative rounded overflow-hidden ">
        <Image
          src={post.thumbnail}
          className=" w-full object-contain mb-2 md:mb-5 inline-block"
          alt={post.title}
          width={1200}
          height={400}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-full pb-4 post-content prose prose-invert max-w-none text-slate-300">
        <MDXRemote source={post.content} />
      </div>
      <ShareButtons slug={post.slug} />
    </div>
  );
};

export default PostItemDetails;
