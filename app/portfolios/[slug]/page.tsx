import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBannerTitle from "@/components/core/PageBannerTitle";
import PortfolioItemDetails from "@/components/PortfolioItemDetails";
import { portfolios } from "@/data/portfolios";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const portfolio = portfolios.find((item) => item.slug === slug);

  if (!portfolio) {
    return {
      title: "Portfolio Not Found",
    };
  }

  return {
    title: `${portfolio.title} | Portfolio`,
    description: portfolio.description,
  };
}

// Generate static paths for all portfolios
export function generateStaticParams() {
  return portfolios.map((item) => ({
    slug: item.slug,
  }));
}

// Page Component
const PortfolioDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const portfolio = portfolios.find((item) => item.slug === slug);

  if (!portfolio) {
    return notFound();
  }

  return (
    <>
      <PageBannerTitle
        title={portfolio.title}
        subtitle="Project Details"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <section className="section bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <PortfolioItemDetails portfolio={portfolio} />

          {/* Back to Portfolio Button */}
          <div className="mt-12 text-center">
            <Link
              href="/portfolios"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailsPage;