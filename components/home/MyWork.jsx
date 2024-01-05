import Image from "next/image";
import MyWorkItem from "./MyWorkItem";
import SectionHead from "./SectionHead";
import { portfolios } from "@/constants";

function MyWork() {
  const showPortfolios = portfolios.filter((item) => item.showStatus === true);
  return (
    <section
      className="py-10 sm:py-16 lg:py-28  relative overflow-hidden z-10"
      id="protfolio"
    >
      <SectionHead
        title="My Work"
        des="I try to satisfy client by my work"
      ></SectionHead>

      <div className="container grid grid-cols-1 xl:grid-cols-3 grid-rows-2 gap-8 ">
        {showPortfolios.map((item, index) => (
          <MyWorkItem key={index} item={item} index={index}></MyWorkItem>
        ))}
      </div>

      <Image
        src="/images/shape.png"
        className=" absolute w-16 md:w-28 bottom-5 left-2"
        alt=""
        width="179"
        height="179"
      />

      <div className="circle absolute w-96 h-96 top-1/2 -right-60  rounded-full -translate-y-1/2 -z-10"></div>
    </section>
  );
}

export default MyWork;
