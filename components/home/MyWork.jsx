import Image from "next/image";
import SectionHead from "./SectionHead";
import PortfolioItem from "../PortfolioItem";

function MyWork({ portfolios }) {
  const showPortfolios = portfolios.filter((item) => item.showStatus === true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section
      className="py-10 sm:py-16  relative overflow-hidden z-10"
      id="protfolio"
    >
      <SectionHead title="My Work" des="I try to satisfy client by my work" />

      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8 ">
        {showPortfolios.map(
          (item) =>
            item.showStatus && <PortfolioItem key={item.slug} item={item} />
        )}
      </div>

      <Image
        src="/images/shape.png"
        className=" absolute w-16 md:w-28 bottom-5 left-2"
        alt=""
        width="179"
        height="179"
      />

      {/* <div className="circle absolute w-96 h-96 top-1/2 -right-60  rounded-full -translate-y-1/2 -z-10"></div> */}
    </section>
  );
}

export default MyWork;
