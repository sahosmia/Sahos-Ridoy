import Image from "next/image";
import Link from "next/link";
import PageBannerTitle from "../../../components/core/PageBannerTitle";
import { portfolios } from "../../../constants/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const portfolio = portfolios.find((item) => item.slug === slug);
  return {
    title: `${portfolio.title} | Portfolio`,
  };
}

export function generateStaticParams() {
  return portfolios.map((item) => ({
    slug: item.slug,
  }));
}

const PortfolioDetailsPage = ({ params }) => {
  const { slug } = params;

  const portfolio = portfolios.find((item) => item.slug === slug);
  if (!portfolio) {
    return notFound();
  }
  return (
    <>
      <PageBannerTitle
        title={portfolio.title}
        img="/images/portfolio/portfolio-background.jpg"
      />

      <div className="py-20">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
          <div className="mb-2 md:mb-5 text-center relative h-56 sm:h-72 md:h-96  lg:h-[500px]   w-full rounded overflow-hidden shadow">
            <Image
              src={portfolio.thumbnail}
              className=" h-fit w-full object-containe mb-2 md:mb-5 shadow inline-block"
              alt={portfolio.title}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <p className="pb-4">{portfolio.description}</p>

          <div className="block sm:hidden">
            <p>
              <span className="font-semibold">Technologhy : </span>
              <span>{portfolio.tecnology.join(", ")}</span>
            </p>

            {portfolio.client && (
              <p>
                <span className="font-semibold">Markectplace : </span>
                {portfolio.client === "Contact" && (
                  <span>Outside of Markectplace</span>
                )}
              </p>
            )}

            {portfolio.type && (
              <p>
                <span className="font-semibold">Type : </span>
                <span>{portfolio.type}</span>
              </p>
            )}

            {portfolio.duration && (
              <p>
                <span className="font-semibold">Duration : </span>
                <span>{portfolio.duration}</span>
              </p>
            )}
          </div>

          <div className="hidden sm:block max-w-lg">
            <div className="flex">
              <div className="w-4/12 ">
                <span className="font-semibold">Technologhy </span>
              </div>
              <div className="w-1/12 ">:</div>
              <div className="w-7/12 ">{portfolio.tecnology.join(", ")}</div>
            </div>

            {portfolio.client && (
              <div className="flex">
                <div className="w-4/12 ">
                  <span className="font-semibold">Markectplace </span>
                </div>
                <div className="w-1/12 ">:</div>
                <div className="w-7/12 ">
                  {portfolio.client === "Contact" && (
                    <span>Outside of Markectplace</span>
                  )}
                </div>
              </div>
            )}

            {portfolio.type && (
              <div className="flex">
                <div className="w-4/12 ">
                  <span className="font-semibold">Type </span>
                </div>
                <div className="w-1/12 ">:</div>
                <div className="w-7/12 ">
                  <span>{portfolio.type}</span>
                </div>
              </div>
            )}

            {portfolio.duration && (
              <div className="flex">
                <div className="w-4/12 ">
                  <span className="font-semibold">Duration </span>
                </div>
                <div className="w-1/12 ">:</div>
                <div className="w-7/12 ">
                  <span>{portfolio.duration}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-8">
            {portfolio.live_url && (
              <Link
                href={portfolio.live_url}
                target="_blank"
                className="font-medium w-1/2 rounded py-2 md:py-8 text-center bg-indigo-300 text-indigo-700 bg-opacity-50 hover:bg-opacity-100 transition-all"
              >
                Live View
              </Link>
            )}
            {portfolio.github && (
              <Link
                href={portfolio.github}
                target="_blank"
                className="font-medium w-1/2  rounded py-2 md:py-8 text-center bg-orange-200 text-orange-700 bg-opacity-50 hover:bg-opacity-100  transition-all"
              >
                Github
              </Link>
            )}
          </div>
          {/* <hr className="pt-2" /> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsPage;