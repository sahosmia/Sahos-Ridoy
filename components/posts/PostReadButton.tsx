"use client";
import { redirect } from "next/navigation";

const PostReadButton = ({ slug }: { slug: number }) => {
  return (
    <button
      onClick={() => {
        redirect(`portfolio/${slug}`);
      }}
      type="button"
      className="mt-4 text-main hover:text-opacity-80 transition-all text-sm md:text-base font-medium rounded inline-block underline"
    >
      Read
    </button>
  );
};

export default PostReadButton;
