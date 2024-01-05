import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({ item }) => {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="rounded overflow-hidden shadow"
    >
      <Image src={item.thumbnail} alt={item.title} width="1000" height="750"  />
      <div className="p-5">
        <h5 className="pb-2 text-2xl font-bold">{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </Link>
  );
};

export default PortfolioItem;
