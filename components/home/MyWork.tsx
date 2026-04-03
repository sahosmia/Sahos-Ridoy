"use client";
import Image from "next/image";
import SectionHead from "./SectionHead";
import PortfolioItem from "../PortfolioItem";
import { portfolios } from "@/data/portfolios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyWork() {
  const showPortfolios = portfolios.filter((item) => item.showStatus === true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section
      className="section relative overflow-hidden z-10"
      id="portfolio"
    >
      <SectionHead title="My Work" des="I try to satisfy client by my work" />

      <div className="container-custom">
        <Slider {...settings} className="portfolio-slider">
          {showPortfolios.map(
            (item) =>
              item.showStatus && (
                <div key={item.slug} className="px-4">
                  <PortfolioItem item={item} />
                </div>
              )
          )}
        </Slider>
      </div>

      <Image
        src="/images/shape.png"
        className=" absolute w-16 md:w-28 bottom-5 left-2"
        alt=""
        width="100"
        height="100"
      />
    </section>
  );
}

export default MyWork;
