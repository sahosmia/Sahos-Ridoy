"use client";
import { notFound, useRouter } from "next/navigation";
import PortfolioItemDetails from "@/components/PortfolioItemDetails";
import { portfolios } from "@/constants";
import Portal from "@/components/core/Portal";
import PortfolioModal from "@/components/PortfolioModal";
import { MouseEvent, useState } from "react";


const PortfolioDetailsPage = ({ params }) => {
  const { slug } = params;
  const [quickView, setQuickView] = useState(true);
  const router = useRouter();

  const portfolio = portfolios.find((item) => item.slug === slug);
  if (!portfolio) {
    return notFound();
  }

  const handleQuickViewClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "settings-sidebar") {
      setQuickView(false);
      router.back(); // Navigate back to the previous page
    }
  };

  return (
    <>
      
      {quickView && (
        <Portal>
          <PortfolioModal handleQuickViewClose={handleQuickViewClose}>
            <PortfolioItemDetails portfolio={portfolio} />
          </PortfolioModal>
        </Portal>
      )}
    </>
  );
};

export default PortfolioDetailsPage;
