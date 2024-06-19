import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";

const PostItemDetails = ({ post }) => {
  return (
    <div className="w-full md:w-8/12 mx-auto">
      <div className="w-full mb-2 md:mb-5 text-center relative rounded overflow-hidden ">
        <Image
          src={post.thumbnail}
          className=" w-full object-containe mb-2 md:mb-5 inline-block"
          alt={post.title}
          width={1200}
          height={400}
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-full pb-4 post-content">
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
        <ShareButtons slug={post.slug} />
    </div>
  );
};

export default PostItemDetails;
