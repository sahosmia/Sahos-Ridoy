import Image from "next/image";
import Link from "next/link";
import PortfolioItemLinkButton from "./PortfolioItemLinkButton";

const PortfolioItem = ({ item }) => {
  return (
    <Link
      href={`portfolios/${item.slug}`}
      className="rounded overflow-hidden shadow max-w-96 max-md:max-w-80 z-10 m-auto"
    >
      <div className="overflow-hidden h-40 md:h-60 relative">
        <Image
          className="hover:scale-[1.1] transition-all duration-300 h-full object-cover"
          src={item.thumbnail}
          alt={item.title}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h5 className="pt-4 md:pt-0 text-xl md:text-2xl font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </h5>
        <p className="pt-2 md:pt-4 text-gray-500 line-clamp-3">
          {item.description}
        </p>
        <PortfolioItemLinkButton slug={item.slug} />
      </div>
    </Link>
  );
};

export default PortfolioItem;
