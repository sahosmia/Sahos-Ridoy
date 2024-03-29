// import React, { useState } from "react";
import Image from "next/image";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import Link from "next/link";
import { portfolios } from "@/constants";
import Error from "@/app/error";

const PortfolioDetailsPage = ({ params }) => {
  const { slug } = params;

  const portfolio = portfolios.find((item) => item.slug === slug);
  // const [image, setImage] = useState(portfolio.thumbnail);
  if (!portfolio) {
    return <Error />;
  }
  return (
    <>
      <PageBannerTitle
        title={portfolio.title}
        img="/images/portfolio/portfolio-background.jpg"
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

            {/* <h1 className="text-4xl font-bold pb-2  text-gray-700">
              {portfolio.title}
            </h1> */}

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
      </div>
    </>
  );
};

export default PortfolioDetailsPage;
