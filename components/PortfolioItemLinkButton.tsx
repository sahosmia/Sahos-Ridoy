"use client"
import { redirect } from "next/navigation";

const PortfolioItemLinkButton = ({ slug }: { slug: string }) => {
  return (
    <button
      onClick={() => {
        redirect(`portfolio/${slug}`);
      }}
      type="button"
      className="mt-4  text-main  hover:text-opacity-80 transition-all text-sm md:text-base font-medium rounded inline-block underline"
    >
      View details
    </button>
  );
};

export default PortfolioItemLinkButton;
