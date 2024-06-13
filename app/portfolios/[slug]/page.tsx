import Image from "next/image";
import Link from "next/link";
import PageBannerTitle from "../../../components/core/PageBannerTitle";
import { portfolios } from "../../../constants/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioItemDetails from "@/components/PortfolioItemDetails";

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
        <div className="container">
          <PortfolioItemDetails portfolio={portfolio} />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsPage;
