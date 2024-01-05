// import React, { useState } from "react";
import Image from "next/image";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import Link from "next/link";
import { portfolios } from "@/constants";

const PortfolioDetailsPage = ({ params }) => {
  const { slug } = params;

  const portfolio = portfolios.find((item) => item.slug === slug);
  // const [image, setImage] = useState(portfolio.thumbnail);

  return (
    <>
      <PageBannerTitle
        title={portfolio.title}
        img="/img/portfolio/portfolio-background.jpg"
      />

      <div className="py-20">
        <div className="container">
          <div className="px-0 md:px-16 2xl:px-72">
            <div className="mb-2 md:mb-5">
              <div className="text-center">
                <Image
                  src={portfolio.thumbnail}
                  className=" h-fit w-full object-cover mb-2 md:mb-5 shadow inline-block"
                  alt={portfolio.title}
                  width="1000"
                  height="400"
                />
              </div>
              {/* <div className="h-16 md:h-20 flex gap-2 mb-10 border p-1 overflow-auto">
                <Image
                  src={portfolio.thumbnail}
                  className="h-auto object-cover shadow inline-block cursor-pointer"
                  alt={portfolio.title}
                  // onClick={() => setImage(portfolio.thumbnail)}
                />

                {portfolio.images.map((item, key) => (
                  <Image
                    key={key}
                    src={item}
                    className="h-auto object-cover shadow inline-block cursor-pointer rounded"
                    alt={portfolio.title}
                    // onClick={() => setImage(item)}
                  />
                ))}
              </div> */}
            </div>

            <h1 className="text-2xl font-bold pb-2  text-gray-700">
              {portfolio.title}
            </h1>
            <p className="pb-4">{portfolio.description}</p>

            <p>
              <span className="font-medium">Technologhy : </span>
              <span>{portfolio.tecnology.join(", ")}</span>
            </p>

            <div className="flex gap-4 mt-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsPage;
