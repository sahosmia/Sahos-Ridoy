import PageBannerTitle from "../../components/core/PageBannerTitle"
import { portfolios } from "../../constants";
import PortfolioItem from "../../components/PortfolioItem"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolios Page",
  description: "Sahos mia is a profetional web developer",
};


const Portfolios = () => {
  return (
    <>
      <PageBannerTitle
        title="Portfolio Page"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <div className="pb-10">
        <div>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
              {portfolios.map((item) => (
                <PortfolioItem key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
