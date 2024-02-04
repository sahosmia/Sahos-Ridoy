import Image from "next/image";
import Link from "next/link";

export default function MyWorkItem({ item, index }) {
  const { title, description, thumbnail, slug } = item;
  return (
    <div
      className={`w-full lg:col-span-2 rounded-lg shadow  mx-auto flex flex-col gap-2 md:gap-10 max-md:max-w-sm overflow-hidden bg-light p-5 lg:p-5 z-10 ${
        index == 2
          ? "xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-4 md:flex-row xl:flex-col"
          : "xl:col-span-2 items-center md:flex-row"
      }`}
    >
      <div className="flex-1">
        <Image
          className={`rounded-lg h-auto md:h-60 w-full block  object-cover object-center `}
          src={thumbnail}
          alt=""
          width="1000"
          height="700"
        />
      </div>

      <div className=" flex-1 pr-10">
        <Link
          href={`/portfolio/${slug}`}
          className="pt-4 md:pt-0 text-2xl md:text-3xl font-bold text-gray-700 line-clamp-2"
        >
          {title}
        </Link>
        <p className="pt-2 md:pt-4 text-gray-400 line-clamp-3 md:line-clamp-4 text-base">
          {description}
        </p>

        <div className="hidden md:block mt-6 md:mt-8 mb-4">
          <Link
            href={`/portfolio/${slug}`}
            className="px-4 py-2 bg-main hover:bg-opacity-80 duration-500 text-sm md:text-base font-medium text-light rounded inline"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
