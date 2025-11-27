"use client";
import { useRouter } from "next/navigation";

const PortfolioItemLinkButton = ({ slug }: { slug: string }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/portfolios/${slug}`)}
      type="button"
      className="
        mt-4 text-main underline 
        hover:text-opacity-80 
        transition-all 
        text-sm md:text-base 
        font-medium 
        rounded inline-block
      "
    >
      View details
    </button>
  );
};

export default PortfolioItemLinkButton;
