import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({ item }) => {
  return (
    <div>
      <Link
        href={`portfolio/${item.slug}`}
        className="rounded overflow-hidden shadow"
      >
        <div className="overflow-hidden h-auto md:h-60">
          <Image
            className="transform-gpu hover:scale-[1.1] transition-all h-full"
            src={item.thumbnail}
            alt={item.title}
            width="1000"
            height="750"
          />
        </div>
        <div className="py-5">
          <h5 className="pt-4 md:pt-0 text-xl md:text-2xl font-semibold text-gray-800 line-clamp-2">
            {item.title}
          </h5>
          <p className="pt-2 md:pt-4 text-gray-500 line-clamp-3">
            {item.description}
          </p>
          <Link
            href={`portfolio/${item.slug}`}
            className="mt-4  text-main  hover:text-opacity-80 transition-all text-sm md:text-base font-medium rounded inline-block underline"
          >
            View details
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;
