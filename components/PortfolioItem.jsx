import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({ item }) => {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="rounded overflow-hidden shadow"
    >
      <div className="overflow-hidden h-60">
        <Image
          className="transform-gpu hover:scale-[1.1] transition-all h-auto"
          src={item.thumbnail}
          alt={item.title}
          width="1000"
          height="750"
        />
      </div>
      <div className="p-5">
        <h5 className="pt-4 md:pt-0 text-xl md:text-2xl font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </h5>
        <p className="pt-2 md:pt-4 text-gray-500 line-clamp-3">
          {item.description}
        </p>
        <div className="hidden md:block mt-4 ">
          <Link
            href={`portfolio/${item.slug}`}
            className=" text-main hover:bg-opacity-80 duration-500 text-sm md:text-base font-medium rounded inline underline"
          >
            View details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
